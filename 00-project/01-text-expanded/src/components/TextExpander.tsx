import { useState } from "react";

export default function TextExpander({
  children,
  btnColor = "red",
  btnOpen = "Show more",
  btnClose = "Show less",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const view = isOpen
    ? children
    : children.split(" ").slice(0, 20).join(" ") + " ...";

  const btnStyle = {
    fontSize: "2.4rem",
    border: "none",
    background: "none",
    marginLeft: "2rem",
    cursor: "pointer",
    color: btnColor,
  };

  return (
    <div className="card">
      <span className="text">{view}</span>
      <button style={btnStyle} onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? btnClose : btnOpen}
      </button>
    </div>
  );
}
