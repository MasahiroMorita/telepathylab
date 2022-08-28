import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ItemMedia from './ItemMedia'
import { Timecode } from './utils/timecode'

const style = {
  paper: {
    backgroundColor: 'white',
    padding: 8,
  },
  h3: {
    marginBlockStart: '0.5em',
    marginBlockEnd: '0.3em'
  },
  iconButton: {
    float: 'right'
  },
  description: {
  },
  duration: {
    marginTop: 2,
    color: '#999',
  },
  accessTimeIcon: {
    fontSize: '1em',
    marginRight: 4
  }
}

function ReelItem(props) {
  const duration = (new Timecode(props.item.end, props.item.standard)).subtract(new Timecode(props.item.start, props.item.standard))
  return (
    <Paper style={style.paper}>
      <ItemMedia src={props.item.thumbnail_url} />
      <IconButton variant="outline" onClick={()=> props.onRemoveItem(props.index)} style={style.iconButton}>
        <DeleteIcon />
      </IconButton>
      <h3 style={style.h3}>{props.item.name}</h3>
      <div style={style.description}>{props.item.description}</div>
      <div style={style.duration}><AccessTimeIcon style={style.accessTimeIcon}/>{duration.toString()}</div>
    </Paper>
  )
}

export default ReelItem