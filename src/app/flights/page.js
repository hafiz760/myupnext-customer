"use client";

import AllFilters from "@/components/search/AllFilters";
import PageHeader from "@/shared/PageHeader";
import React from "react";
import FlightBg from "@/assets/images/flights.png";
import PlainCard from "@/shared/PlainCard";
import FlightFilters from "@/components/flights/FlightFilters";
import FlightForm from "@/components/flights/FlightForm";

const Flight = () => {
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
        <div className="grid grid-cols-12 gap-x-5 my-10">
          <div className="col-span-12 md:col-span-3">
            <AllFilters />
          </div>
          <div className="col-span-12 md:col-span-9 mt-3 md:mt-0">
            <FlightFilters />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Flight;
