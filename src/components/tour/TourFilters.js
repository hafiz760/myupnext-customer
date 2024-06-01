"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { FaCalendar, FaFilter } from "react-icons/fa";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button, Modal, Slider } from "antd";
import "../../assets/css/tour.css";
import { da } from "date-fns/locale";

function TourFilters() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [categoryValue, setCategoryValue] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  });
  const [minFilterPrice, setMinFilterPrice] = useState(0);
  const [maxFilterPrice, setMaxFilterPrice] = useState(400);
  const [servicesValue, setServicesValue] = useState([]);
  const [durationValue, setDurationValue] = useState([]);
  const categoryRef = useRef(null);
  const availabilityRef = useRef(null);
  const priceRangeRef = useRef(null);
  const servicesRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handelFilterPriceChange = (event) => {
    setMinFilterPrice(event[0]);
    setMaxFilterPrice(event[1]);
  };

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

  const handleDurationChange = (name) => {
    setDurationValue((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toLocaleDateString();
  const Today = new Date().toLocaleDateString();
  const handleServiceChange = (service) => {
    setServicesValue((prev) =>
      prev.includes(service)
        ? prev.filter((ser) => ser !== service)
        : [...prev, service]
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

  const handelDateFilter = (name) => {
    switch (name) {
      case "Today":
        setSelectionRange({
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        });
        break;
      case "Tomorrow":
        setSelectionRange({
          startDate: tomorrow,
          endDate: tomorrow,
          key: "selection",
        });
      case "More Dates":
        setIsModalOpen(false);
        setActiveFilter("availability");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const trimCategories = {
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
    Tours: [
      "Days Trip",
      "Boat Tours",
      "Hop on Hop off",
      "Food & wine tours",
      "Air tours",
      "Multi-day tours",
      "Hiking",
      "Shopping tours",
    ],
  };
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
    Tours: [
      "Days Trip",
      "Boat Tours",
      "Hop on Hop off",
      "Food & wine tours",
      "Air tours",
      "Multi-day tours",
      "Hiking",
      "Shopping tours",
    ],
    Cruises: ["Sightseeing cruises", "Cruise vacation"],
    "Massages & hot springs": ["Spa & massages", "Hot springs"],
    "Water activities": [
      "Snorkeling",
      "Rafting",
      "Paddleboarding",
      "Boat charters",
      "Water sports",
      "Kayaking",
      "Surfing",
      "Fishing trips",
      "Scuba diving",
      "Resort passes",
    ],
    "Outdoor & sports activities": [
      "Skydiving",
      "Bungee jumping",
      "Rock climbing",
      "Ziplining",
      "Gliding",
      "ATV",
      "Scooter rentals",
      "Skiing & snowboarding",
      "Wildlife",
      "Canyoning",
      "Camping",
      "Fitness",
      "Wellness",
    ],
    "Cultural experiences": [
      "Workshops",
      "Cooking classes",
      "Traditional clothes rental",
      "Photoshoot",
      "Beauty services",
    ],
  };
  const Duration = {
    Duration: [
      "0-3 hours",
      "3-5 hours",
      "5-7 hours",
      "Full day",
      "2 or more days",
    ],
  };
  const services = {
    "Guided language": ["English available"],
    Services: [
      " Private group",
      "Hotel pick up",
      "Easy refund",
      "Guaranteed departure",
    ],
  };
  const participationDates = [
    { name: "Today" },
    { name: "Tomorrow" },
    { icon: <FaCalendar />, name: "More Dates" },
  ];
  const ModalFooter = () => {
    return (
      <div className="flex justify-between flex-row items-center mt-2">
        <span
          className="cursor-pointer underline"
          onClick={() => {
            setServicesValue([]);
            setCategoryValue([]);
            setSelectionRange({
              startDate: null,
              endDate: null,
              key: "selection",
            });
            setMinFilterPrice(0);
            setMaxFilterPrice(400);
            setDurationValue([]);
          }}
        >
          Reset
        </span>
        <span>
          <Button className="bg-[#ff5b00] border border-primary hover:!border-primary hover:!text-white text-white">
            See 295 Results
          </Button>
        </span>
      </div>
    );
  };
  return (
    <>
      <div className="max-w-[1160px] mx-auto w-full mt-4">
        <div className="flex flex-row py-4 justify-between">
          <div className="w-[470px] flex gap-2">
            <div>
              <div
                ref={categoryRef}
                className={` relative ${
                  activeFilter === "category"
                    ? "text-primary border border-primary"
                    : "border "
                } filterButton mb-3 ${
                  categoryValue.length > 0
                    ? "text-primary border border-primary"
                    : "border"
                }`}
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
                <div className="bg-white overflow-y-auto absolute w-[750px] rounded-lg shadow-2xl z-50 p-2 max-h-[400px]">
                  {Object.entries(categories).map(([key, value]) => (
                    <div key={key} className="mt-4 mb-1">
                      <h1 className="text-xl font-semibold mb-3">{key} </h1>
                      <div className="flex items-center flex-wrap gap-4">
                        {value.map((cat) => (
                          <div
                            key={cat}
                            className={`cursor-pointer p-2 rounded-lg ${
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
                  <div className="flex justify-between flex-row items-center mt-5">
                    <span
                      className=" cursor-pointer underline"
                      onClick={() => setCategoryValue([])}
                    >
                      Reset
                    </span>
                    <span>
                      <Button className=" bg-[#ff5b00] border border-primary hover:!border-primary hover:!text-white text-white">
                        See 295 Results
                      </Button>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div
                ref={availabilityRef}
                className={`${
                  activeFilter === "availability"
                    ? "text-primary border border-primary"
                    : "border "
                } filterButton ${
                  selectionRange.startDate !== null ||
                  selectionRange.endDate !== null
                    ? "text-primary border border-primary"
                    : null
                } mb-3`}
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
                <div className="bg-white overflow-y-auto absolute z-50 rounded-lg shadow-2xl p-2">
                  <DateRangePicker
                    className="text-primary"
                    ranges={[selectionRange]}
                    onChange={(ranges) => setSelectionRange(ranges.selection)}
                  />
                  <div className="flex justify-between flex-row items-center mt-5">
                    <span
                      className=" cursor-pointer underline"
                      onClick={() =>
                        setSelectionRange({
                          startDate: null,
                          endDate: null,
                        })
                      }
                    >
                      Reset
                    </span>
                    <span>
                      <Button className=" bg-[#ff5b00] border border-primary hover:!border-primary hover:!text-white text-white">
                        See 295 Results
                      </Button>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div
                ref={priceRangeRef}
                className={`${
                  activeFilter === "priceRange"
                    ? "text-primary border border-primary"
                    : "border "
                } filterButton  ${
                  minFilterPrice > 0 || maxFilterPrice < 400
                    ? "text-primary border border-primary"
                    : null
                } mb-3`}
                onClick={() => handleToggleFilter("priceRange")}
              >
                <span>Price</span>
                {activeFilter === "priceRange" ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </div>
              {activeFilter === "priceRange" && (
                <div className="bg-white overflow-y-auto absolute z-50 min-w-[350px] rounded-lg p-4 shadow-2xl ">
                  <div className="mb-3">{`US$ ${minFilterPrice} - US$ ${maxFilterPrice}`}</div>
                  <div>
                    <Slider
                      range
                      step={1}
                      value={[minFilterPrice, maxFilterPrice]}
                      min={0}
                      max={400}
                      onChange={handelFilterPriceChange}
                    />
                  </div>
                  <div className="flex justify-between ">
                    <span>US$ 0</span>
                    <span>US$ 400</span>
                  </div>
                  <div className="flex justify-between flex-row items-center mt-5">
                    <span
                      className=" cursor-pointer underline"
                      onClick={() => {
                        setMaxFilterPrice(400);
                        setMinFilterPrice(0);
                      }}
                    >
                      Reset
                    </span>
                    <span>
                      <Button className=" bg-[#ff5b00] border border-primary hover:!border-primary hover:!text-white text-white">
                        See 295 Results
                      </Button>
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div
                ref={servicesRef}
                className={`${
                  activeFilter === "services"
                    ? "text-primary border border-primary"
                    : "border "
                } filterButton mb-3 ${
                  servicesValue.length > 0
                    ? "text-primary border border-primary"
                    : null
                }`}
                onClick={() => handleToggleFilter("services")}
              >
                <span>Services</span>
                {activeFilter === "services" ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </div>
              {activeFilter === "services" && (
                <div className="bg-white overflow-y-auto absolute  rounded-lg shadow-2xl z-50 p-2 max-h-[400px]">
                  {Object.entries(services).map(([key, value]) => (
                    <div key={key} className="mt-4 mb-1">
                      <h1 className="text-xl font-semibold mb-2">{key} </h1>
                      <div className="flex items-center flex-wrap gap-2">
                        {value.map((service) => (
                          <div
                            key={service}
                            className={`cursor-pointer p-2 rounded-lg ${
                              servicesValue.includes(service)
                                ? "bg-orange-200 border border-orange-500"
                                : "bg-gray-200 border bg-transparent border-gray-300"
                            }`}
                            onClick={() => handleServiceChange(service)}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between flex-row items-center mt-5">
                    <span
                      className=" cursor-pointer underline"
                      onClick={() => setServicesValue([])}
                    >
                      Reset
                    </span>
                    <span>
                      <Button className=" bg-[#ff5b00] border border-primary hover:!border-primary hover:!text-white text-white">
                        See 295 Results
                      </Button>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className={`border filterButton ${
                servicesValue.length > 0 ||
                selectionRange.startDate !== null ||
                selectionRange.endDate !== null ||
                minFilterPrice > 0 ||
                maxFilterPrice < 400 ||
                categoryValue.length > 0 ||
                durationValue.length > 0
                  ? "text-primary border border-primary"
                  : null
              }`}
              onClick={showModal}
            >
              <FaFilter />
              <span>Filters</span>
              <span></span>
            </div>
            <Modal
              width="50%"
              centered
              title="Filters"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={ModalFooter}
              className=" rounded-lg"
            >
              <div className="px-9">
                <div>
                  {Object.entries(Duration).map(([key, value]) => (
                    <div key={key} className="mt-1 mb-1">
                      <h1 className="text-xl font-semibold mb-3">{key}</h1>
                      <div className="flex items-center flex-wrap gap-4">
                        {value.map((name) => (
                          <div
                            key={name}
                            className={`cursor-pointer p-2 rounded-lg ${
                              durationValue.includes(name)
                                ? "bg-orange-200 border border-orange-500"
                                : "bg-gray-200 border bg-transparent border-gray-300"
                            }`}
                            onClick={() => handleDurationChange(name)}
                          >
                            {name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-1 mb-1">
                  {Object.entries(seeMore ? categories : trimCategories).map(
                    ([key, value]) => (
                      <div key={key} className="mt-1 mb-1">
                        <h1 className="text-xl font-semibold mb-3">{key}</h1>
                        <div className="flex items-center flex-wrap gap-4">
                          {value.map((cat) => (
                            <div
                              key={cat}
                              className={`cursor-pointer p-2 rounded-lg ${
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
                    )
                  )}
                  <span
                    className=" cursor-pointer underline p-1"
                    onClick={() => setSeeMore(!seeMore)}
                  >
                    {seeMore ? "See less" : "See more"}
                  </span>
                </div>
                <div className="mt-1 mb-1">
                  <div className="text-xl font-semibold mb-3">
                    Participation date(s)
                  </div>
                  <div className="flex space-x-2">
                    {participationDates.map((data) => (
                      <div
                        key={data.name}
                        className={`cursor-pointer   p-2 rounded-lg ${
                          data.name === "Today"
                            ? selectionRange.startDate?.toLocaleDateString() ===
                                Today ||
                              selectionRange.endDate?.toLocaleDateString() ===
                                Today
                              ? "bg-orange-200 border border-orange-500"
                              : "bg-gray-200 border bg-transparent border-gray-300"
                            : data.name === "Tomorrow"
                            ? selectionRange.startDate?.toLocaleDateString() ===
                                tomorrowString ||
                              selectionRange.endDate?.toLocaleDateString() ===
                                tomorrowString
                              ? "bg-orange-200 border border-orange-500"
                              : "bg-gray-200 border bg-transparent border-gray-300"
                            : data.name === "More dates"
                            ? selectionRange.startDate !== null ||
                              selectionRange.endDate !== null
                              ? "bg-orange-200 border border-orange-500"
                              : "bg-gray-200 border bg-transparent border-gray-300"
                            : "bg-gray-200 border bg-transparent border-gray-300"
                        }`}
                        onClick={() => handelDateFilter(data.name)}
                      >
                        <div className="flex justify-center items-center gap-0.5">
                          {data?.icon}
                          {data.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[100%] mt-3">
                  <span className="text-xl font-semibold mb-3">
                    Price Range
                  </span>
                  <div className="mb-2 mt-3 text-base font-medium">{`US$ ${minFilterPrice} - US$ ${maxFilterPrice}`}</div>
                  <div className="">
                    <div>
                      <Slider
                        range
                        step={1}
                        value={[minFilterPrice, maxFilterPrice]}
                        min={0}
                        max={400}
                        onChange={handelFilterPriceChange}
                      />
                    </div>
                    <div className="flex justify-between ">
                      <span>US$ 0</span>
                      <span>US$ 400</span>
                    </div>
                  </div>
                </div>
                <div>
                  {Object.entries(services).map(([key, value]) => (
                    <div key={key} className="mt-4 mb-1">
                      <h1 className="text-xl font-semibold mb-2">{key} </h1>
                      <div className="flex items-center flex-wrap gap-2">
                        {value.map((service) => (
                          <div
                            key={service}
                            className={`cursor-pointer p-2 rounded-lg ${
                              servicesValue.includes(service)
                                ? "bg-orange-200 border border-orange-500"
                                : "bg-gray-200 border bg-transparent border-gray-300"
                            }`}
                            onClick={() => handleServiceChange(service)}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourFilters;
