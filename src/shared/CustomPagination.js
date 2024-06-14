import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import "../assets/css/pagination.css";

function CustomPagination({ PerPageCards, setCurrentCards, allCards }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = parseInt(PerPageCards);

  useEffect(() => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    setCurrentCards(allCards.slice(indexOfFirstCard, indexOfLastCard));
  }, [currentPage, cardsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center mt-8">
      <Pagination
        responsive
        current={currentPage}
        total={allCards.length}
        pageSize={cardsPerPage}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
}

export default CustomPagination;
