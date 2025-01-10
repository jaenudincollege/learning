function Button({ text, color, fontSize }) {
  const btnStyle = {
    color,
    fontSize,
  };
  return <button style={btnStyle}>{text}</button>;
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
