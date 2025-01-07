function App() {
  const name = "Jaenudin Firdaus";
  return <Hello name={name} />;
}

function Hello({ name }) {
  const styling = {
    color: "blue",
  };
  return (
    <h1 style={{ color: "red" }}>
      Hello <span style={styling}>{name}</span>, How are you doing?
    </h1>
  );
}

export default App;
