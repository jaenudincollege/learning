import { useState } from "react";

export default function TextExpander({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <span className="text">{children}</span>
      <button className="btn">Show more</button>
    </div>
  );
}
