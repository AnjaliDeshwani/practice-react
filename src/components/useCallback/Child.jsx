import React from "react";
//export const Child = React.memo(({ func }) => {
export const Child = ({ func }) => {
  console.log("child component");
  return (
    <div>
      <div>Child Component</div>
    </div>
  );
};

// export default React.memo(Child);
