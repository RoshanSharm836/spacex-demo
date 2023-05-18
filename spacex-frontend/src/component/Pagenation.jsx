import React from "react";

export default function Pagenation({ Total, limit, currentPage, setPage }) {
  const arr = [];

  for (let i = 1; i <= Math.floor(Total / limit) + 1; i++) {
    arr.push(i);
  }
  console.log(Total);
  function changePage(i) {
    return () => {
      setPage(i);
    };
  }
  return (
    <div className="pagination">
      {arr?.map((el, i) => (
        <button
          key={i}
          className={currentPage === el ? "active" : null}
          onClick={changePage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
