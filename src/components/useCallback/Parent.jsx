import { useCallback } from "react";
import { useState, useMemo } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => setCounterOne(() => counterOne + 1);

  const incrementTwo = () => setCounterTwo(() => counterTwo + 1);

  //   const func = () => console.log("hi anjali");
  const func = useCallback(() => console.log("hi anjali"), [counterTwo]);

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

      {/* <button onClick={incrementTwo}>incrementTwo-{counterTwo}</button> */}

      <Child func={func} />
    </div>
  );
};
