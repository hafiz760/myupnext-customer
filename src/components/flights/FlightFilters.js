import CustomButton from "@/shared/CustomButton";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import {
  MdArrowLeft,
  MdArrowRight,
  MdCheckCircleOutline,
} from "react-icons/md";
import moment from "moment";
import { useSelector } from "react-redux";
import CustomPagination from "@/shared/CustomPagination";

const FlightFilters = () => {
  let Pagepercard = 5;
  const [currentCards, setCurrentCards] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);
  const [paginatedData, setPaginatedData] = useState(null);
  const allFlights = useSelector((state) => state?.Flights?.flightsData);

  const carriers = useSelector(
    (state) => state?.Flights?.flightsData?.dictionaries?.carriers
  );

  const policies =
    allFlights?.data[0]?.travelerPricings[0]?.fareDetailsBySegment[0]
      ?.amenities;

  function convertIsoDuration(duration) {
    const regex = /PT(\d+H)?(\d+M)?/;
    const matches = duration.match(regex);

    if (!matches) {
      throw new Error("Invalid duration format");
    }

    const hours = matches[1] ? parseInt(matches[1].slice(0, -1), 10) : 0;
    const minutes = matches[2] ? parseInt(matches[2].slice(0, -1), 10) : 0;

    return `${hours}h ${minutes}m`;
  }

  const handelDownClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);
  };

  useEffect(() => {
    const newData =
      allFlights.data.length > Pagepercard ? currentCards : allFlights.data;

    setPaginatedData(newData);
  }, [allFlights, currentCards, Pagepercard]);

  return (
    <div className="grid grid-cols-1  gap-5 mb-5">
      {paginatedData?.map((flight, index) => {
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
                    {(carriers &&
                      carriers[`${flight?.validatingAirlineCodes[0]}`]) ||
                      flight?.validatingAirlineCodes[0]}
                  </p>
                </div>
                <div className=" flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 w-full">
                    <div className="flex items-center justify-between lg:justify-start gap-5">
                      <div>
                        <h4 className="text-[17px] sm:text-[20px] font-semibold">
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

                      <div className="sm:!min-w-[207px] min-w-[80px] h-[1px] relative bg-[#eee] ">
                        <p className="text-gray-500 absolute text-[13px] top-1/2 left-1/2 min-w-[68px] transform -translate-x-1/2 -translate-y-1/2 border border-[#eee] rounded-full px-1.5 py-1 bg-white text-center">
                          {convertIsoDuration(flight?.itineraries[0]?.duration)}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[17px] sm:text-[20px] font-bold">
                          {moment(
                            flight?.itineraries[0]?.segments[0]?.arrival?.at
                          ).format("HH:mm A")}
                        </h4>
                        <p className="text-xs mt-1">
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
                    <div className="mt-2">
                      {policies &&
                        policies.length > 0 &&
                        policies.map((policy) => (
                          <span className="flex items-center gap-1">
                            <p className="text-green-500 text-xs">
                              {<MdCheckCircleOutline />}
                            </p>
                            <p className="text-xs">{policy?.description}</p>
                          </span>
                        ))}
                      <div className="flex items-center text-xs text-blue-500">
                        <span>Baggage & policy details</span>
                        <MdArrowRight />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-[30%] flex justify-end  flex-col lg:flex-row items-center lg:items-center  gap-2">
                    <p className="text-center sm:text-xl text-[15px] text-primary  font-bold">
                      {flight?.price?.currency} {flight?.price?.grandTotal}
                    </p>
                    <div>
                      <Button className=" border font-bold border-primary hover:!border-primary rounded-md  text-sm px-7 py-2.5 flex items-center justify-center bg-primary text-white hover:!bg-primary hover:!text-white">
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

      {allFlights?.data?.length > Pagepercard && (
        <CustomPagination
          allCards={allFlights?.data}
          PerPageCards={Pagepercard}
          setCurrentCards={setCurrentCards}
        />
      )}
    </div>
  );
};

export default FlightFilters;
