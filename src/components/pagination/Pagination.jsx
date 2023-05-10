import { useEffect, useState } from "react";
import "./Pagination.css";

/*** Frontend Driven where we are loading all the items initally****/
export const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const arr = new Array(products.length / 10).fill(0);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) setProducts(data.products);
  };

  console.log(arr);

  useEffect(() => {
    fetchData();
  }, []);

  const pageClickHandler = (page) => setPage(page);

  return (
    <div className="product-wrapper">
      {products.slice(page * 10 - 10, page * 10).map((prod) => (
        <div className="prod-item">
          <img src={prod.thumbnail}></img>
          <div>{prod.title}</div>
        </div>
      ))}
      <div className="pagination">
        <span
          onClick={() => pageClickHandler(page - 1)}
          className={page >= 2 ? "" : "page-disabled"}
        >
          ⏮️
        </span>
        {[...Array(products.length / 10)].map((_, index) => (
          <span
            onClick={() => pageClickHandler(index + 1)}
            className={`${index + 1 === page && "active"} page-num`}
          >
            {index + 1}
          </span>
        ))}
        <span
          onClick={() => pageClickHandler(page + 1)}
          className={page < products.length / 10 ? "" : "page-disabled"}
        >
          ⏭️
        </span>
      </div>
    </div>
  );
};

//API - https://dummyjson.com/products?limit=100
