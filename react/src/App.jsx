function Button({ text, color, fontSize }) {
  return <button style={{ color, fontSize }}>{text}</button>;
}

export default function App() {
  return (
    <>
      <Button text="Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="yellow" fontSize={16} />
      <Button text="Click Me!" color="cyan" fontSize={24} />
    </>
  );
}
