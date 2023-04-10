import { Hoc } from "./Hoc";
const MyComponent = ({ data }) => {
  return (
    <div>
      <div>{data}</div>
    </div>
  );
};

export default Hoc(MyComponent);
