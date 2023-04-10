import { useState } from "react";

export const Accordian1 = ({ acc }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleContentHandler = () => {
    setShowContent((prev) => !prev);
  };
  return (
    <div className="acc-item">
      <div className="acc-data" onClick={toggleContentHandler}>
        <span>{acc.label}</span>
        <span>{showContent ? "-" : "+"}</span>
      </div>
      {showContent && <div>{acc.content}</div>}
    </div>
  );
};
