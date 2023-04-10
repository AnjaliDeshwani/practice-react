import "./InfiniteScrollOne.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

//Implemented infinite scroll using onscroll event
const InfiniteScrollOne = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  //   useEffect(() => {
  //     fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`)
  //       .then((res) => res.json())
  //       .then((json) => setData((data) => [...data, ...json.data]));
  //     console.log(page);
  //   }, [page]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`
      );
      const json = await res.json();
      setData((data) => [...data, ...json.data]);
    })();
  }, [page]);

  const scrollToEnd = () => {
    setPage((page) => page + 1);
  };

  window.onscroll = function () {
    //check if the page has been scrolled to the bottom
    if (
      window.innerHeight + Math.round(document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div>
      <div className="list">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <div className="container" key={index}>
                <h4>Id: {item._id}</h4>
                <h3>Name: {item.name}</h3>
                <h4>Trips: {item.trips}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default InfiniteScrollOne;
