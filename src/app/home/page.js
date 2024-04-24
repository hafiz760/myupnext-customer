import React from "react";

import TopHeader from "@/components/home/TopHeader";
import Seachbar from "@/components/home/Seachbar";
import Features from "@/components/home/Features";
import TravelChoice from "@/components/home/TravelChoice";
import WhereNext from "@/components/home/WhereNext";
import About from "@/components/home/About";
import Faq from "@/components/home/Faq";

const Dashboard = () => {
  return (
    <React.Fragment>
      <TopHeader />
      <Seachbar />
      <Features />
      <TravelChoice />
      <WhereNext />
      <Faq />
      <About />
    </React.Fragment>
  )
}

export default Dashboard