import TopSearch from "@/components/tour/TopSearch";
import TourCards from "@/components/tour/TourCards";
import TourFilters from "@/components/tour/TourFilters";
import CustomFooter from "@/shared/CustomFooter";
import TopBar from "@/shared/TopBar";
import React from "react";

function page() {
  return (
    <div className=" overflow-hidden">
      <TopBar />
      <TopSearch />
      <TourFilters />
      <TourCards />
      <CustomFooter />
    </div>
  );
}

export default page;
