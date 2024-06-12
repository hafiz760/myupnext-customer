import React, { useRef, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

import DetectClickOutside from "@/shared/DetectClickOutside";

const PassengerDropdown = ({ adults, childrens, setAdults, setChildrens }) => {
  const [isShowPassDropdown, setIsShowPassDropdown] = useState(false);
  const passDropdownRef = useRef("");

  const setPassengerFieldText = () => {
    let adult = `${adults} Adult`;
    let children = childrens > 0 ? `, ${childrens} Child` : "";
    return adult + children;
  };

  const handleIncAdult = () => {
    setAdults((prv) => prv + 1);
  };
  const handleDecAdult = () => {
    if (adults == 1) {
      return;
    }
    setAdults((prv) => prv - 1);
  };
  const handleIncChild = () => {
    setChildrens((prev) => {
      if (prev < adults * 2) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };
  const handleDecChild = () => {
    if (childrens == 0) {
      return;
    }
    setChildrens((prv) => prv - 1);
  };

  return (
    <div className="w-full mb-3">
      <label className={`text-[13px] text-start font-semibold `}>
        Passengers
      </label>
      <div
        className=" flex items-center mb-1 w-full h-[45px] text-black rounded-full border border-primary px-4 cursor-pointer"
        onClick={() => setIsShowPassDropdown(!isShowPassDropdown)}
      >
        {setPassengerFieldText()}
      </div>
      <DetectClickOutside
        clickRef={passDropdownRef}
        setActiveState={setIsShowPassDropdown}
      />
      {isShowPassDropdown && (
        <div
          ref={passDropdownRef}
          className="absolute bg-white shadow-xl rounded-md py-4 min-w-[250px] w-[350px] z-[999]"
        >
          <div className="border-b border-[#f8f8f8] px-4 py-2 flex items-center">
            <FaInfoCircle className="text-[#f09b0a] me-2" size={25} />
            <p className="text-[#f09b0a]">
              1 adult can bring a maximum of 2 children and 1 infant
            </p>
          </div>
          <div className="border-b border-[#f8f8f8] px-4 py-4 flex justify-between items-center">
            <div>
              <p className="text-[18px] font-semibold">Adult</p>
              <p className="text-[16px] font-normal">Aged 12+</p>
            </div>
            <div>
              <div className="flex items-center">
                <CiSquareMinus
                  size={35}
                  className="text-primary cursor-pointer"
                  onClick={handleDecAdult}
                />
                <p className="mx-2">{adults}</p>
                <CiSquarePlus
                  size={35}
                  className="text-primary cursor-pointer"
                  onClick={handleIncAdult}
                />
              </div>
            </div>
          </div>
          <div className="border-b border-[#f8f8f8] px-4 py-4 flex justify-between items-center">
            <div>
              <p className="text-[18px] font-semibold">Child</p>
              <p className="text-[16px] font-normal">Aged 2-11</p>
            </div>
            <div>
              <div className="flex items-center">
                <CiSquareMinus
                  size={35}
                  className="text-primary cursor-pointer"
                  onClick={handleDecChild}
                />
                <p className="mx-2">{childrens}</p>
                <CiSquarePlus
                  size={35}
                  className="text-primary cursor-pointer"
                  onClick={handleIncChild}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerDropdown;
