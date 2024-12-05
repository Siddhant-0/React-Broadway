import React from "react";

//? Always wrap your elements in react fragment/div
//? function always return one thing at a time
//? react.fragments does not support styling ..........so use <div></div>

const App = () => {
  return (
    <React.Fragment>
      <div>Siddhant</div>
      <div>Shrestha</div>
    </React.Fragment>
  );
};

export default App;
