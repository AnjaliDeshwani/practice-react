import { useState } from "react";
import { data } from "./data";
import { ListItem } from "./ListItem";

export const List = () => {
  const [list, setList] = useState(data);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        {list.map((item) => (
          <ListItem item={item} key={item.id} setList={setList} list={list} />
        ))}

        <button>Add New Item</button>
      </div>
    </div>
  );
};
