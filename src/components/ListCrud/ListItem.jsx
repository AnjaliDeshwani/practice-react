import { useState } from "react";

export const ListItem = ({ item }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }} key={item.id}>
        <div>{item.name}</div>
        <div>{item.city}</div>
        <button onClick={() => setIsUpdate(true)}>Update</button>
        <button>Delete</button>
      </div>
      {isUpdate && (
        <form>
          <input type="text" value={item.name} />
          <input type="text" value={item.city} />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};
