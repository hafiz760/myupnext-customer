"use client";

import AllFilters from "@/components/search/AllFilters";
import PageHeader from "@/shared/PageHeader";
import React from "react";
import FlightBg from "@/assets/images/flights.png";
import PlainCard from "@/shared/PlainCard";
import FlightFilters from "@/components/flights/FlightFilters";
import FlightForm from "@/components/flights/FlightForm";
import { useSelector } from "react-redux";
import CardLoading from "@/shared/CardLoading";
import NoDataFound from "@/shared/NoDataFound";

const Flight = () => {
  const allFlights = useSelector((state) => state?.Flights?.flightsData);

  const isLoading = useSelector((state) => state?.Flights?.isLoading);
  return (
    <React.Fragment>
      <PageHeader
        title="FLIGHTS"
        description="Save on amazing places to stay and explore unique experiences"
        bg={FlightBg}
      />
      <div className="container relative mb-[50px] mt-[-40px]">
        <PlainCard>
          <FlightForm />
        </PlainCard>
        {isLoading && (
          <div className="w-100 justify-content-center mt-5">
            {new Array(2).fill().map((_, index) => {
              return (
                <div key={index} className="mb-md-0 mb-4 m-3 grid grid-cols-1">
                  <CardLoading />
                </div>
              );
            })}
          </div>
        )}
        {!isLoading &&
          (allFlights?.data.length ? (
            <div className="grid grid-cols-12 gap-x-5 my-10">
              <div className="col-span-12 md:col-span-3">
                <AllFilters />
              </div>
              <div className="col-span-12 md:col-span-9 mt-5">
                <FlightFilters />
              </div>
            </div>
          ) : (
            <NoDataFound />
          ))}
      </div>
    </React.Fragment>
  );
};

export default Flight;
