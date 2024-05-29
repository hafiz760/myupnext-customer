import Experiences from "@/components/experiences/Experiences";
import Sightseeingcruises from "@/components/experiences/Sightseeingcruises";
import TraditionalClothRental from "@/components/experiences/TraditionalClothRental";
import UnmissableExperiences from "@/components/experiences/UnmissableExperiences";
import CustomFooter from "@/shared/CustomFooter";
import TopBar from "@/shared/TopBar";
import React from "react";

function page() {
  return (
    <div className=" overflow-hidden">
      <TopBar />
      <Experiences />
      <UnmissableExperiences />
      <TraditionalClothRental />
      <Sightseeingcruises />
      <CustomFooter/>
    </div>
  );
}

export default page;
