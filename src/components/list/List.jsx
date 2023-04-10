import { useState } from "react";
import { v4 as uuid } from "uuid";
export const List = () => {
  const list = [
    {
      id: uuid(),
      name: "Anjali",
      city: "Delhi",
    },
    {
      id: uuid(),
      name: "John",
      city: "New York",
    },
  ];

  const [itemList, setItemList] = useState(list);
  const [addList, setAddList] = useState(false);
  const [addNewItem, setAddNewItem] = useState({ name: "", city: "" });

  const addHandler = () => {
    setAddList(true);
  };

  const saveItemToList = () => {
    setItemList([...itemList, { id: uuid(), ...addNewItem }]);
  };

  const deleteHandler = (itemId) => {
    const newList = itemList.filter((item) => item.id !== itemId);
    setItemList(newList);
  };

  console.log(itemList);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        {itemList.map((item) => (
          <div style={{ display: "flex", gap: "1rem" }} key={item.id}>
            <div>{item.name}</div>
            <div>{item.city}</div>
            <button>Update</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </div>
        ))}
        {addList ? (
          <div>
            <input
              placeholder="add name"
              value={addNewItem.name}
              onChange={(e) =>
                setAddNewItem({ ...addNewItem, name: e.target.value })
              }
            ></input>
            <input
              placeholder="add city"
              value={addNewItem.city}
              onChange={(e) =>
                setAddNewItem({ ...addNewItem, city: e.target.value })
              }
            ></input>
            <button onClick={saveItemToList}>Save</button>
          </div>
        ) : (
          <button onClick={addHandler}>Add new Item</button>
        )}
      </div>
    </div>
  );
};
