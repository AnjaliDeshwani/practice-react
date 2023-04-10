import "./InfiniteScrollTwo.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

//https://infinite-scroll.shobit1337.repl.co/products/:limit/:page

const LIMIT = 5;
export const InfiniteScrollTwo = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  //const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    const elementRef = loader.current;

    const handleObserver = (entries) => {
      const target = entries[0];
      console.log(target);
      if (target.isIntersecting) {
        setPageNo((prev) => ++prev);
      }
    };

    //#1, creating a new instance of IntersectionObserver which is taking a callback function
    const observer = new IntersectionObserver(handleObserver);

    //#2 Register our observer with an element.
    if (elementRef) observer.observe(elementRef);

    //#3 Clean up when our component unmount, Remove the observer
    // return () => {
    //   observer.unobserve(elementRef);
    // };
  }, []);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://infinite-scroll.shobit1337.repl.co/products/${LIMIT}/${pageNo}`
      );
      setData((previous) => [...previous, ...res.data.list]);
    })();
  }, [pageNo]);

  console.log(data);
  return (
    <>
      <div className="list">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
      <div ref={loader}></div>
    </>
  );
};

// //https://blog.shobitdeshwal.codes/how-to-implement-infinite-scroll-using-react  -> refer this article

// //https://replit.com/@shobit1337/infinite-scroll#db.js - api code
