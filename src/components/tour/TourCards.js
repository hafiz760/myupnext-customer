"use client";
import TourCard from "@/shared/TourCard";
import React, { useState } from "react";
import "../../assets/css/tour.css";
import CustomPagination from "@/shared/CustomPagination";

function TourCards() {
  const allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17];
  const [currentCards, setCurrentCards] = useState([]);

  return (
    <div className="max-w-[1160px] px-5 xl:px-0 xl:mx-auto w-full mb-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {currentCards.map((card) => (
          <TourCard key={card} />
        ))}
      </div>
      <CustomPagination
        PerPageCards="8"
        allCards={allCards}
        setCurrentCards={setCurrentCards}
      />
    </div>
  );
}

export default TourCards;
