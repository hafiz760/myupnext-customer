import CustomButton from "@/shared/CustomButton";
import { Button } from "antd";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import {
  MdArrowLeft,
  MdArrowRight,
  MdCheckCircleOutline,
} from "react-icons/md";
import moment from "moment";
import { useSelector } from "react-redux";

const FlightFilters = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const allFlights = useSelector((state) => state?.Flights?.flightsData);

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
      {allFlights &&
        allFlights?.data.length &&
        allFlights?.data?.map((flight, index) => {
          return (
            <div key={index}>
              <div>
                <div
                  className={`border rounded-lg p-5 w-full cursor-pointer hover:bg-[#FDF0EC] ${
                    clickedCard === index
                      ? "border-b-0 rounded-br-none rounded-bl-none shadow"
                      : null
                  }`}
                >
                  <div className="flex justify-start ml-1 ">
                    <p className="text-gray-500 text-center text-xs mb-3">
                      {flight?.airline}
                    </p>
                  </div>
                  <div className=" flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 w-full">
                      <div className="flex items-center justify-between lg:justify-start gap-5">
                        <div>
                          <h4 className="text-[20px] font-semibold">
                            {moment(
                              flight?.itineraries[0]?.segments[0]?.departure?.at
                            ).format("HH:mm A")}
                          </h4>
                          <p className="text-xs mt-1">
                            {
                              flight?.itineraries[0]?.segments[0]?.departure
                                ?.iataCode
                            }
                          </p>
                        </div>

                        <div className="sm:!min-w-[207px] min-w-[100px] h-[1px] relative bg-[#eee] ">
                          <p className="text-gray-500 absolute top-1/2 left-1/2 min-w-[68px] transform -translate-x-1/2 -translate-y-1/2 border border-[#eee] rounded-full px-1.5 py-1 bg-white text-center">
                            {"TBD"}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold">
                            {moment(
                              flight?.itineraries[0]?.segments[0]?.arrival?.at
                            ).format("HH:mm A")}
                          </h4>
                          <p className="text-xs mt-1">
                            {" "}
                            {
                              flight?.itineraries[0]?.segments[0]?.arrival
                                ?.iataCode
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex lg:justify-end justify-center  gap-2 items-center mt-3 lg:mt-0 lg:items-start">
                      <p className="text-center text-xl text-primary  font-bold">
                        {flight?.price?.currency} {flight?.price?.grandTotal}
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
                        {flight?.price?.currency} {flight?.price?.grandTotal}
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
            </div>
          );
        })}

      {!allFlights && (
        <div className="border bg-white shadow-xl ph-6 px-4 w-full rounded-md flex items-center justify-center h-[150px] mt-4">
          <p className="text-[20px]">No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default FlightFilters;
