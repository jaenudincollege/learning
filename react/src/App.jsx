export default function App() {
  const animals = ["cat", "tiger", "lion", "eagle"];

  return (
    <>
      <h1>Animals</h1>
      <List animals={animals} />
    </>
  );
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => (
        <ListItem key={animal} animal={animal} />
      ))}
    </ul>
  );
}

function ListItem(props) {
  return <li>{props.animal}</li>;
}
