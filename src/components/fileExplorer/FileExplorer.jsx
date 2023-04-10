import { dir } from "./data";
import { Folder } from "./Folder";

export const FileExplorer = () => {
  return (
    <div style={{ margin: 25 }}>
      <Folder dir={dir} />
    </div>
  );
};
