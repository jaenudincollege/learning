function Button({ text, color, fontSize, handleClick }) {
  const btnStyle = {
    color,
    fontSize,
  };
  return (
    <button style={btnStyle} onClick={handleClick}>
      {text}
    </button>
  );
}

export default function App() {
  function buttonHandleClick() {
    window.location.href = "https://google.com";
  }

  return (
    <>
      <Button
        text="Click Me!"
        color="red"
        fontSize={12}
        handleClick={buttonHandleClick}
      />
      <Button
        text="Click Me!"
        color="yellow"
        fontSize={16}
        handleClick={buttonHandleClick}
      />
      <Button
        text="Click Me!"
        color="cyan"
        fontSize={24}
        handleClick={buttonHandleClick}
      />
    </>
  );
}
