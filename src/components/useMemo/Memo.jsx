import { useCallback } from "react";
import { useState, useMemo } from "react";

export const Memo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => setCounterOne(() => counterOne + 1);

  const incrementTwo = () => setCounterTwo(() => counterTwo + 1);

  const iseEven = useMemo(() => {
    console.log("iseEven");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "30%",
        margin: "0 auto",
      }}
    >
      <button onClick={incrementOne}>incrementOne-{counterOne}</button>
      <span>{iseEven ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo}>incrementTwo-{counterTwo}</button>
    </div>
  );
};
