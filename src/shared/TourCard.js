import React from "react";
import image from "../assets/images/vendor-bg.png";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

function TourCard() {
  const updatedName = (name) => {
    if (name.length > 42) {
      return `${name.slice(0, 55)}...`;
    }
    return name;
  };
  const chips = [
    {
      name: "Easy refund",
    },
    {
      name: "Instant confirmation",
    },
  ];
  const favourite = false;
  return (
    <div className=" hover:shadow-lg border border-gray-300 hover:-translate-y-1 rounded-xl transition-all min-w-[275px] xl:min-w-[275px] h-[353px] tracking-wide cursor-pointer">
      <Link href="/search">
        <div className=" !h-[43%] relative">
          <Image
            className="h-full !rounded-tl-xl !rounded-tr-xl !rounded-none"
            src={image}
          />
          <div className="absolute top-3 left-3 flex items-center w-full pr-5  justify-between gap-3">
            <div className=" text-white text-xs font-bold gap-1 flex ">
              {/* <span className=" border min-w-[120px] bg-[#ff5b00] max-h-[22px] border-[#ff5b00] px-1 py-0.5 rounded-sm ">
                Summer Campaign
              </span> */}
              <span className=" border bg-[#ff5b00]  max-h-[22px] border-[#ff5b00] px-1 py-0.5 rounded-sm ">
                Best choice
              </span>
            </div>
            <div className="">
              {favourite ? (
                <IoMdHeart color="#fff" className="h-[28px] w-[28px]" />
              ) : (
                <CiHeart color="#fff" className="h-[28px] w-[28px]" />
              )}
            </div>
          </div>
        </div>
        <div
          className="h-[57%] bg-white !rounded-bl-xl !rounded-br-xl !rounded-none"
          style={{
            padding: "8px 12px 12px",
          }}
        >
          <div className="flex justify-between h-full flex-col">
            <div
              style={{
                lineHeight: "20px",
              }}
              className="content"
            >
              <h1 className=" font-bold mb-1   text-md text-black  w-full">
                {updatedName(
                  "Grand Canyon National Park South Rim Bus Tour from Las Vegas"
                )}
              </h1>
              <span className=" text-base font-normal text-[#212121]">
                Departing from Las Vegas
              </span>
              <div className="flex gap-1 items-center mt-1">
                {chips.map((chip) => (
                  <span className="text-sm font-normal bg-gray-100 px-1">
                    {chip.name}
                  </span>
                ))}
              </div>
              <span className="flex gap-1 items-center mt-1">
                <span
                  className="flex items-center gap-0.5 text-xs"
                  style={{ color: "#f09b0a" }}
                >
                  <p>
                    <FaStar />
                  </p>
                  <p className="text-sm">4.3</p>
                </span>
                <span className=" text-xs text-[#757575]">{`(293)`}</span>
                <span className="w-[3px] h-[3px] rounded-[50%] bg-[#757575] mx-[4px]"></span>
                <span className="text-[#757575]"> 1K+ booked</span>
              </span>
            </div>
            <div className="price ">
              <div>
                <span className=" text-base font-bold">US$ 40.00</span>
              </div>
              <div className="text-[#f44622]">
                <span className=" border border-[#f44622] px-1 text-xs">
                  Best Price Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TourCard;
