"use client";
import TourCard from "@/shared/TourCard";
import React, { useState } from "react";
import { Pagination } from "antd";
import "../../assets/css/tour.css";
function TourCards() {
  const allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17];
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(8);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-[1160px] mx-auto w-full mb-5">
      <div className="grid grid-cols-4 gap-5">
        {currentCards.map((card) => (
          <TourCard key={card} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination
          responsive
          current={currentPage}
          total={allCards.length}
          pageSize={cardsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default TourCards;
