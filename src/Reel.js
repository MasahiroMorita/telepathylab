import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import HDIcon from '@mui/icons-material/Hd';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import ReelItem from './ReelItem'
import AddReelItem from './AddReelItem'
import useHooks from './hooks/Reel'

const style = {
  paper: {
    padding: 2,
  },
  formControl: {
    marginTop: 2,
    marginBottom: 2,
  },
  icon: {
    fontSize: '1em',
    marginRight: 3
  }
}

function Reel(props) {
  const {
    items,
    name,
    editMode,
    standard,
    definition,
    onAddItem,
    onRemoveItem,
    onChangeName,
    onKeyPress,
    toggleEditMode,
    duration,
  } = useHooks()

  return (
    <div>
      <Paper sx={style.paper} elevation={0}>
        {editMode ?
          <FormControl variant="standard" fullWidth sx={style.formControl}>
            <InputLabel htmlFor="input-field">Reel Name</InputLabel>
            <Input id="input-field" size="small" autoFocus
              value={name} onChange={onChangeName} onKeyPress={onKeyPress} onBlur={toggleEditMode}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={toggleEditMode} >
                    <CheckIcon />
                  </IconButton>
                </InputAdornment>
              } />
          </FormControl>
          :
          <h3 onClick={toggleEditMode}>
            {name}
            <IconButton onClick={toggleEditMode}><EditIcon /></IconButton>
          </h3>
        }
        <AccessTimeIcon style={style.icon} />{duration ? duration.toString() : '0:00:00:00'}&nbsp;&nbsp;&nbsp;
        {standard ? <span><SettingsInputSvideoIcon style={style.icon} />{standard}&nbsp;&nbsp;&nbsp;</span> : null}
        {definition === 'HD' ? <HDIcon /> : null}
      </Paper>
      <Stack spacing={1}>
        {items.map((item, i)=> {
          return <ReelItem key={i} index={i} item={item} onRemoveItem={onRemoveItem} />
        })}
        <AddReelItem onAddItem={onAddItem} standard={standard} definition={definition} />
      </Stack>
    </div>
  )
}

export default Reel