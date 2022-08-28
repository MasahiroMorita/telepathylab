import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import HDIcon from '@mui/icons-material/Hd';
import Paper from '@mui/material/Paper'
import ItemMedia from './ItemMedia'
import { Timecode } from './utils/timecode'

const style = {
  paperValid: {
    backgroundColor: 'white',
    padding: 8,
    cursor: 'pointer',
  },
  paperInvalid: {
    backgroundColor: '#ddd',
    padding: 8,
    color: '#888'
  },
  h3: {
    marginBlockStart: '0.5em',
    marginBlockEnd: '0.3em'
  },
  description: {
  },
  detail: {
    marginTop: 2,
    color: '#999',
  },
  icon: {
    fontSize: '1em',
    marginRight: 3
  }
}
function Clip(props) {
  const duration = Timecode.duration(props.clip.start, props.clip.end, props.clip.standard)
  const isEmpty = !props.standard && !props.definition
  const isValid = isEmpty || (props.clip.standard === props.standard && props.clip.definition === props.definition)

  return (
    <Paper style={isValid ? style.paperValid : style.paperInvalid} onClick={()=> isValid && props.onAddItem(props.clip)}>
      <ItemMedia src={props.clip.thumbnail_url} />
      <h3 style={style.h3}>{props.clip.name}</h3>
      <div style={style.description}>{props.clip.description}</div>
      <div style={style.detail}>
        <AccessTimeIcon style={style.icon}/>{duration.toString()}&nbsp;&nbsp;&nbsp;
        <SettingsInputSvideoIcon style={style.icon} />{props.clip.standard}&nbsp;&nbsp;&nbsp;
        {props.clip.definition === 'HD' ? <HDIcon /> : null}
      </div>
    </Paper>
  )
}

export default Clip