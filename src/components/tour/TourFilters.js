"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function TourFilters() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [categoryValue, setCategoryValue] = useState([]);
  const categoryRef = useRef(null);
  const availabilityRef = useRef(null);
  const priceRangeRef = useRef(null);
  const servicesRef = useRef(null);

  const handleToggleFilter = (filter) => {
    setActiveFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const handleCategoryChange = (cat) => {
    setCategoryValue((prevCategoryValue) =>
      prevCategoryValue.includes(cat)
        ? prevCategoryValue.filter((s) => s !== cat)
        : [...prevCategoryValue, cat]
    );
  };

  const handleClickOutside = (event) => {
    if (
      (activeFilter === "category" &&
        !categoryRef.current.contains(event.target)) ||
      (activeFilter === "availability" &&
        !availabilityRef.current.contains(event.target)) ||
      (activeFilter === "priceRange" &&
        !priceRangeRef.current.contains(event.target)) ||
      (activeFilter === "services" &&
        !servicesRef.current.contains(event.target))
    ) {
      setActiveFilter(null);
    }
  };
  // const handleClickOutside = (event) => {
  //   if (
  //     !categoryRef.current?.contains(event.target) &&
  //     !availabilityRef.current?.contains(event.target) &&
  //     !priceRangeRef.current?.contains(event.target) &&
  //     !servicesRef.current?.contains(event.target)
  //   ) {
  //     setActiveFilter(null);
  //   }
  // };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = {
    Interests: [
      "Hot Air Balloon Experiences",
      "Koalas & Kangaroos Experiences",
      "Glacier exploration",
      "Lord of the Rings Tours",
      "Temples & shrines",
      "Historical Sites Tours",
      "K-pop Tours & Experiences",
      "Hanbok Rental",
      "Nightlife",
      "Floating Markets Tours",
      "Elephant sanctuaries",
      "Instagrammable Tours",
      "Whale watching",
    ],
    Tours: ["Days Trip", "Boat Tours", "Hop on Hop off"],
  };
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  console.log(selectionRange);

  return (
    <div className="max-w-[1160px] mx-auto w-full mt-4">
      <div className="flex flex-row py-4 justify-between">
        <div className="w-[470px] flex gap-2">
          <div>
            <div
              ref={categoryRef}
              className={` relative ${
                activeFilter === "category"
                  ? "text-primary border border-primary"
                  : "border border-gray-600"
              } filterButton mb-3`}
              onClick={() => handleToggleFilter("category")}
            >
              <span>Category</span>
              {activeFilter === "category" ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )}
            </div>
            {activeFilter === "category" && (
              <div className="bg-gray-50 overflow-y-auto absolute w-[750px] shadow-lg p-2 max-h-[540px]">
                {Object.entries(categories).map(([key, value]) => (
                  <div key={key} className="mt-4 mb-1">
                    <h1 className="text-xl font-semibold">{key}</h1>
                    <div className="flex items-center flex-wrap gap-2">
                      {value.map((cat) => (
                        <div
                          key={cat}
                          className={`cursor-pointer p-2 rounded ${
                            categoryValue.includes(cat)
                              ? "bg-orange-200 border border-orange-500"
                              : "bg-gray-200 border bg-transparent border-gray-300"
                          }`}
                          onClick={() => handleCategoryChange(cat)}
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div
              ref={availabilityRef}
              className={`${
                activeFilter === "availability"
                  ? "text-primary border border-primary"
                  : "border border-gray-600"
              } filterButton`}
              onClick={() => handleToggleFilter("availability")}
            >
              <span>Availability</span>
              {activeFilter === "availability" ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )}
            </div>
            {activeFilter === "availability" && (
              <div className="bg-gray-50 overflow-y-auto absolute  shadow-lg p-2">
                <DateRangePicker
                  className="text-primary"
                  ranges={[selectionRange]}
                  onChange={(ranges) => setSelectionRange(ranges.selection)}
                />
              </div>
            )}
          </div>
          <div>
            <div
              ref={priceRangeRef}
              className={`${
                activeFilter === "priceRange"
                  ? "text-primary border border-primary"
                  : "border border-gray-600"
              } filterButton`}
              onClick={() => handleToggleFilter("priceRange")}
            >
              <span>Price</span>
              {activeFilter === "priceRange" ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )}
            </div>
          </div>
          <div>
            <div
              ref={servicesRef}
              className={`${
                activeFilter === "services"
                  ? "text-primary border border-primary"
                  : "border border-gray-600"
              } filterButton`}
              onClick={() => handleToggleFilter("services")}
            >
              <span>Services</span>
              {activeFilter === "services" ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="filterButton" style={{ border: "2px solid " }}>
            <FaFilter />
            <span>Filters</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourFilters;
