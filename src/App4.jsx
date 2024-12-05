// conditional rendering
// const App = () => {
//   let num = 31;
//   let remainder = num % 2;

//   return <p>{remainder === 0 ? "even" : "odd"}</p>;
// };

const App = () => {
  let isLoggedIn = true;
  return <>{isLoggedIn == 1 ? "You are logged in" : "You are logged out"}</>;
};
export default App;
