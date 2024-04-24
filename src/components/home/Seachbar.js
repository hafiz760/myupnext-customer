"use client";

import PlainCard from "@/shared/PlainCard";
import React, { useEffect, useState } from "react";
import SeachForm from "./SeachForm";
import AppModal from "./AppModal";

const Seachbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("appModal")) {
      setOpen(true);
      sessionStorage.setItem("appModal", true);
    }
  }, []);

  return (
    <div className="container relative mt-[-40px] z-20 w-full md:w-[85%]">
      {open && <AppModal open={open} setOpen={setOpen} />}
      <PlainCard customClass="shadow-md">
        <div className="py-7">
          <h3 className="text-[30px] font-bold mb-10">
            Search For The Experiences
          </h3>
          <SeachForm />
        </div>
      </PlainCard>
    </div>
  );
};

export default Seachbar;
