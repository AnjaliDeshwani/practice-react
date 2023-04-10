import { useEffect } from "react";
import { useState } from "react";
import "./Accordian.css";
export const Accordian = () => {
  const [toggleMenu, setToggleMenu] = useState({
    ["sec-one"]: false,
    ["sec-two"]: false,
    ["sec-three"]: false,
  });

  //   const {[sec-one],[sec-two],[sec-three]}= toggleMenu;
  const clickHandler = (e) => {
    e.persist();
    console.log(e.target.id, toggleMenu["sec-one"]);
    setToggleMenu({ ...toggleMenu, [e.target.id]: !toggleMenu[e.target.id] });
  };
  useEffect(() => {
    console.log(toggleMenu);
  }, [toggleMenu]);
  return (
    <div className="container1" onClick={clickHandler}>
      <div>
        <div className="accordian-item" id="sec-one">
          <span>Section 1 </span>
          <span className="plus-icon">+</span>
        </div>
        {toggleMenu["sec-one"] && (
          <div className="sec-data">Section-One data</div>
        )}
      </div>

      <div>
        <div className="accordian-item" id="sec-two">
          <span>Section 2 </span>
          <span className="plus-icon">+</span>
        </div>
        {toggleMenu["sec-two"] && (
          <div className="sec-data">Section-Two data</div>
        )}
      </div>

      <div>
        <div className="accordian-item" id="sec-three">
          <span>Section 3 </span>
          <span className="plus-icon">+</span>
        </div>
        {toggleMenu["sec-three"] && (
          <div className="sec-data">Section-Three data</div>
        )}
      </div>
    </div>
  );
};
