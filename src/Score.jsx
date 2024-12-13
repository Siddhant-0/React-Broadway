const Score = (props) => {
  return (
    <div
      style={{
        border: props.runs >= 100 ? "5px solid red" : "2px solid black",
        borderRadius: "20px",
        width: "300px",
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "16px",
      }}
    >
      <h3>{props.name}</h3>
      <h4>{props.runs}</h4>
      {props.runs >= 100 ? <h4>Star Player</h4> : null}
    </div>
  );
};

export default Score;
