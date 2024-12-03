
const divStyle={
    width : "400px",
    padding:"1rem",
    border : "1px solid black"
}
const imgStlye={
    height:"400px",
    width :"400px"
}
const Person = (props) => {
  return (
    <div style={divStyle}>
      <img src={props.image} alt="" style={imgStlye} />
    <h3>{props.name}</h3>
    </div>
  )
}

export default Person;
