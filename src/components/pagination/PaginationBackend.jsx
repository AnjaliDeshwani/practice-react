import { useEffect, useState } from "react";
import "./Pagination.css";

/*** Backend Driven where we are loading items after the desired page is clicked****/
export const PaginationBackend = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const arr = new Array(products.length / 10).fill(0);

  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    setTotalPages(data.total / 10);
    if (data && data.products) setProducts(data.products);
  };

  console.log(arr);

  useEffect(() => {
    fetchData();
  }, [page]);

  const pageClickHandler = (page) => setPage(page);

  return (
    <div className="product-wrapper">
      {products.map((prod) => (
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
        {[...Array(totalPages)].map((_, index) => (
          <span
            onClick={() => pageClickHandler(index + 1)}
            className={`${index + 1 === page && "active"} page-num`}
          >
            {index + 1}
          </span>
        ))}
        <span
          onClick={() => pageClickHandler(page + 1)}
          className={page < totalPages ? "" : "page-disabled"}
        >
          ⏭️
        </span>
      </div>
    </div>
  );
};

//API - https://dummyjson.com/products?limit=100
