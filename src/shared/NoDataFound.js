import React from "react";
import NotFound from "../assets/images/NoDataFound.jpg";
import Image from "next/image";
function NoDataFound() {
  return (
    <div className="border bg-white flex-col shadow md:w-[70%] mx-auto ph-6 px-4 w-full rounded-md flex items-center justify-center min-h-[150px] mt-4">
      <Image src={NotFound} alt="no" className="w-[200px] h-full" />
      <p className="text-[20px] mb-3">No Data Found</p>
    </div>
  );
}

export default NoDataFound;
