export default function App() {
  const animals = ["cat", "tiger", "lion", "eagle"];
  return (
    <>
      <h1>Animals</h1>
      <ul>
        {animals.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </>
  );
}
