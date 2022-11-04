import React, { useState } from "react";

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [pages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [...Array(pages + 1).keys()].slice(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  // eslint-disable-next-line
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  // eslint-disable-next-line
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      {/* To show the data */}
      <div>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      <div>
        {/* previous button */}
        <button disabled={currentPage === 1} onClick={goToPreviousPage}>
          prev
        </button>

        {/* show page numbers */}
        {/* {getPaginationGroup().map((item, index) => (
          <button key={index} onClick={changePage}>
            <span>{item}</span>
          </button>
        ))} */}
        {pageNumbers.map((pgNumber) => (
          <button onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</button>
        ))}

        {/* next button */}
        <button disabled={currentPage === pages} onClick={goToNextPage}>
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
