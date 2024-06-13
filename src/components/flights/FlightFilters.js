import CustomButton from "@/shared/CustomButton";
import { Button } from "antd";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import {
  MdArrowLeft,
  MdArrowRight,
  MdCheckCircleOutline,
} from "react-icons/md";

const FlightFilters = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const allFlights = [
    {
      airline: "American Airlines",
      start: { time: "07:00", location: "MSY" },
      end: { time: "14:37", location: "SAV" },
      duration: "3h 15m",
      price: "US$ 689.55",
    },
    {
      airline: "American Airlines",
      start: { time: "07:00", location: "MSY" },
      end: { time: "14:37", location: "SAV" },
      duration: "3h 15m",
      price: "US$ 689.55",
    },
    {
      airline: "American Airlines",
      start: { time: "07:00", location: "MSY" },
      end: { time: "14:37", location: "SAV" },
      duration: "3h 15m",
      price: "US$ 689.55",
    },
    {
      airline: "American Airlines",
      start: { time: "07:00", location: "MSY" },
      end: { time: "14:37", location: "SAV" },
      duration: "3h 15m",
      price: "US$ 689.55",
    },
    {
      airline: "American Airlines",
      start: { time: "07:00", location: "MSY" },
      end: { time: "14:37", location: "SAV" },
      duration: "3h 15m",
      price: "US$ 689.55",
    },
    {
      airline: "American Airlines",
      start: { time: "07:00", location: "MSY" },
      end: { time: "14:37", location: "SAV" },
      duration: "3h 15m",
      price: "US$ 689.55",
    },
    {
      airline: "American Airlines",
      start: { time: "07:00", location: "MSY" },
      end: { time: "14:37", location: "SAV" },
      duration: "3h 15m",
      price: "US$ 689.55",
    },
  ];
  const policies = [
    { policy: "Checked baggage included", icon: <MdCheckCircleOutline /> },
    {
      policy: "Refundable",
      icon: <MdCheckCircleOutline />,
    },
  ];
  const handelDownClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);
  };
  return (
    <div className="grid grid-cols-1  gap-5 mb-5">
      {allFlights.map((flight, index) => {
        return (
          <>
            <div>
              <div
                key={index}
                className={`border rounded-lg p-5 w-full cursor-pointer hover:bg-[#FDF0EC] ${
                  clickedCard === index
                    ? "border-b-0 rounded-br-none rounded-bl-none shadow"
                    : null
                }`}
              >
                <div className="flex justify-start ml-1 ">
                  <p className="text-gray-500 text-center text-xs mb-3">
                    {flight.airline}
                  </p>
                </div>
                <div className=" flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 w-full">
                    <div className="flex items-center justify-between lg:justify-start gap-5">
                      <div>
                        <h4 className="text-[20px] font-semibold">
                          {flight.start.time}
                        </h4>
                        <p className="text-xs mt-1">{flight.start.location}</p>
                      </div>

                      <div className="sm:!min-w-[207px] min-w-[100px] h-[1px] relative bg-[#eee] ">
                        <p className="text-gray-500 absolute top-1/2 left-1/2 min-w-[68px] transform -translate-x-1/2 -translate-y-1/2 border border-[#eee] rounded-full px-1.5 py-1 bg-white ">
                          {flight.duration}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold">{flight.end.time}</h4>
                        <p className="text-xs mt-1">{flight.end.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full flex lg:justify-end justify-center  gap-2 items-center mt-3 lg:mt-0 lg:items-start">
                    <p className="text-center text-xl text-primary  font-bold">
                      {flight.price}
                    </p>
                    <div>
                      <Button
                        onClick={() => handelDownClick(index)}
                        icon={<FaArrowDown />}
                        className=" border font-bold border-primary hover:!border-primary rounded-md  text-sm px-7 py-2.5 flex items-center justify-center bg-primary text-white me-2 lg:mb-2  hover:!bg-primary hover:!text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {clickedCard === index && (
                <div className="flex p-5 border border-t-0 rounded-br-lg rounded-bl-lg transition-all">
                  <div className="lg:w-1/2 w-[70%] flex flex-col sm:flex-row justify-between">
                    <span>Economy</span>
                    <div>
                      {policies.map((policy) => (
                        <span className="flex items-center gap-1">
                          <p className="text-green-500 text-xs">
                            {policy.icon}
                          </p>
                          <p className="text-xs">{policy.policy}</p>
                        </span>
                      ))}
                      <div className="flex items-center text-xs text-blue-500">
                        <span>Baggage & policy details</span>
                        <MdArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-[30%] flex justify-end  flex-col lg:flex-row items-center lg:items-center  gap-2">
                    <p className="text-center text-xl text-primary  font-bold">
                      {flight.price}
                    </p>
                    <div>
                      <Button className=" border font-bold border-primary hover:!border-primary rounded-md  text-sm px-7 py-2.5 flex items-center justify-center bg-primary text-white me-2 mb-2 hover:!bg-primary hover:!text-white">
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FlightFilters;
