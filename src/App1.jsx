import Person from "./Person";

const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      App
      <Person
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqTiWVJixPPYeBUVP2-eG0drSGjWS0wJng&s"
        name="Shaktiman"
      />
      <Person image="\src\assets\cowboy.jpg" name="cowboy" />
      <Person
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqTiWVJixPPYeBUVP2-eG0drSGjWS0wJng&s"
        name="Shaktiman"
      />
    </section>
  );
};

export default App;
