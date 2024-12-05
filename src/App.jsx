import Score from "./Score";

const playerData = [
  {
    id: 1,
    name: "Shubham Man",
    runs: 100,
  },
  {
    id: 2,
    name: "Unik Aryal",
    runs: 200,
  },
  {
    id: 3,
    name: "Rajan Gurung",
    runs: 300,
  },
  {
    id: 4,
    name: "Pratik Achharya",
    runs: 10,
  },
  {
    id: 5,
    name: "Aditya Gurung",
    runs: 10,
  },
];

const App = () => {
  return (
    <div
      style={{
        gap: "2rem",
      }}
    >
      {playerData.map((item) => {
        return <Score key={item.id} name={item.name} runs={item.runs} />;
      })}
    </div>
  );
};

export default App;
