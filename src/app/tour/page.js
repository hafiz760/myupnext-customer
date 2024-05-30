import TopSearch from "@/components/tour/TopSearch";
import TourFilters from "@/components/tour/TourFilters";
import TopBar from "@/shared/TopBar";
import React from "react";

function page() {
  return (
    <>
      <TopBar />
      <TopSearch />
      <TourFilters/>
    </>
  );
}

export default page;
