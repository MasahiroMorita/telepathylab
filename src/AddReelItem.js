import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal'
import AddIcon from '@mui/icons-material/AddCircleOutline';
import Clip from './Clip'
import Store from './store'
import useHooks from './hooks/AddReelItem'

const style = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '90%',
    overflow: 'scroll',
    backgroundColor: 'white',
    boxShadow: 24,
    padding: 4,
  }
}

function AddReelItem(props) {
  const {
    open,
    toggleOpen
  } = useHooks()

  return (
    <Button onClick={toggleOpen} variant='outlined'>
      <AddIcon />&nbsp;Add Clip
      <Modal open={open} onClose={toggleOpen}>
        <Box style={style.box}>
          <Stack spacing={1}>
            {Store.clips.map((clip, i)=> {
              return <Clip key={i} clip={clip}
                  onAddItem={props.onAddItem}
                  standard={props.standard}
                  definition={props.definition} />
            })}
          </Stack>
        </Box>
      </Modal>
    </Button>
  )
}

export default AddReelItem