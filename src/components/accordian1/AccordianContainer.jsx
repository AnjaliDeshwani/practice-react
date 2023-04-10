import { data } from "./data";
import { Accordian1 } from "./Accordian1";
import "./Acoordian1.css";
export const AccordianContainer = () => {
  return (
    <div>
      <div className="acc-conatiner">
        {data.map((acc) => (
          <Accordian1 acc={acc} key={acc.id} />
        ))}
      </div>
    </div>
  );
};
