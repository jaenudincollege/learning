export default function App() {
  const animals = ["cat", "tiger", "lion", "eagle"];
  const animalsList = animals.map((animal) => <li key={animal}>animal</li>);
  return (
    <>
      <h1>Animals</h1>
      <ul>{animalsList}</ul>
    </>
  );
}
