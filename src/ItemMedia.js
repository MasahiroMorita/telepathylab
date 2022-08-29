
const style = {
  height: 120,
  width: 120,
  marginRight: 8,
  float: 'left',
}

function ItemMedia(props) {
  return <img src={props.src} style={style} alt={props.alt} />
}

export default ItemMedia