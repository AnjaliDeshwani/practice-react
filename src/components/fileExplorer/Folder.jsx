import { useState } from "react";
import "./Folder.css";

export const Folder = ({ dir }) => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(!show);
  };

  if (dir.type === "folder") {
    return (
      <div style={{ padding: 10 }}>
        <span className="folder" onClick={clickHandler}>
          📁{dir.name}
        </span>
        {show && (
          <div>
            {dir.items.map((item) => (
              <Folder key={item.id} dir={item} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <span className="file">🗃️{dir.name}</span>;
  }
};
