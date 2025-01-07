function App() {
  const name = "Jaenudin Firdaus";
  return (
    <>
      <Hello name={name} />
      <AnotherComponent />
    </>
  );
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

function AnotherComponent() {
  return <h2>Another Component</h2>;
}

export default App;
