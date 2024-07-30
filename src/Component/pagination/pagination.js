import React, { useEffect, useState } from "react";
import "./style.css";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPagination = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?Limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
      //   console.log(data);
    }
  };

  useEffect(() => {
    fetchPagination();
  }, [page]);
  const selectedPageHnadler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage != page
    )
      setPage(selectedPage);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title}></img>
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectedPageHnadler(page - 1)}
            className={page > 1 ? "" : "pagination__disabled"}
          >
            ◀️
          </span>

          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectedPageHnadler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectedPageHnadler(page + 1)}
            className={
              page < products.length / 10 ? "" : "pagination__disabled"
            }
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagination;
