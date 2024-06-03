import React from "react";
import "../../assets/css/tour.css";
import { CiSearch } from "react-icons/ci";
function TopSearch() {
  return (
    <div className="Tourcontent px-3 xl:px-0 w-full h-full min-h-[190px] flex items-center">
      <div className="w-full  max-w-[1160px] mx-auto">
        <div className="">
          <h1 className=" text-3xl font-semibold m-0 text-white">
            Tours in popular destinations
          </h1>

          <div className="bg-white rounded-full w-[100%] sm:w-[400px] h-[48px] p-[6px] flex flex-row items-center mt-3 py-0 px-6">
            <CiSearch className="w-[20px] h-[20px]" />
            <input
              placeholder="Search anything"
              className=" border-none p-3  outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSearch;
