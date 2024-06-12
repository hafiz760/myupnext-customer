"use client";

import { useState } from "react";
import { Radio } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { FaInfoCircle } from "react-icons/fa";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

import CustomInput from "@/shared/CustomInput";
import CustomButton from "@/shared/CustomButton";
import "../../assets/css/flight-form.css";
import DatePicker from "@/shared/DatePicker";

const FlightForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [adults, setAdults] = useState(1);
  const [childrens, setChildrens] = useState(0);
  const [isShowPassDropdown, setIsShowPassDropdown] = useState(false);
  const [flightType, setFlightType] = useState(
    "Economy / premium economy class"
  );

  const tripTypeItems = [
    {
      label: "Economy / premium economy class",
      key: "Economy / premium economy class",
    },
    {
      label: "Business / first class",
      key: "Business / first class",
    },
  ];

  const searchHandler = (values) => {
    // console.log({ values });
  };

  const onTripTypeChange = (e) => {
    console.log("radio checked", e.target.value);
    setTripType(e.target.value);
  };

  const handleMenuClick = (e) => {
    setFlightType(e.key);
  };

  const menuProps = {
    items: tripTypeItems,
    onClick: handleMenuClick,
  };

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
    <div className="pb-5">
      <div className="my-4 flex items-center">
        <Radio.Group onChange={onTripTypeChange} value={tripType}>
          <Radio value={"one-way"}>One-Way Trip</Radio>
          <Radio disabled value={"round"}>
            Round Trip
          </Radio>
        </Radio.Group>

        <div className="ms-8 lg:ms-[110px]">
          <Dropdown menu={menuProps}>
            <Button className="flight-type-btn border border-primary text-primary rounded-full text-[14px] py-4 flex items-center ">
              <Space>
                {flightType}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>

      <form onSubmit={searchHandler}>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:space-x-4">
          <DatePicker customClass="grow" placeholder="Select Date" />
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
            {isShowPassDropdown && (
              <div className="absolute bg-white shadow-lg rounded-md py-4 min-w-[250px] w-[350px]">
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
          <div className="flex items-center">
            <CustomButton
              type="submit"
              colored
              style={{ width: "100%", marginBottom: "0" }}
            >
              Search
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FlightForm;
