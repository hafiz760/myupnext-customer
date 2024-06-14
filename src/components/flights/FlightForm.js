"use client";

import { useEffect, useRef, useState } from "react";
import { Radio } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";

import CustomButton from "@/shared/CustomButton";
import "../../assets/css/flight-form.css";
import DatePicker from "@/shared/DatePicker";
import FlightLocationsAutoComplete from "./FlightLocations";
import PassengerDropdown from "./PassengerDropdown";
import { getFlightOffers } from "@/redux/slices/FlightSlice";

const FlightForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [adults, setAdults] = useState(1);
  const [childrens, setChildrens] = useState(0);
  const [originLocation, setOriginLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [activeSubmitBtn, setActiveSubmitBtn] = useState(false);
  const dispatch = useDispatch();

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

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(getFlightOffers());
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

  const handleOriginSelect = (place) => {
    setOriginLocation(place);
  };
  const handleDestinationSelect = (place) => {
    setDestinationLocation(place);
  };

  useEffect(() => {
    if (adults >= 1 && originLocation && destinationLocation && departureDate) {
      setActiveSubmitBtn(true);
    } else {
      setActiveSubmitBtn(false);
    }
  }, [adults, originLocation, destinationLocation, departureDate]);

  return (
    <div className="pb-5">
      <div className="my-4 flex flex-col md:flex-row items-center">
        <Radio.Group onChange={onTripTypeChange} value={tripType}>
          <Radio value={"one-way"}>One-Way Trip</Radio>
          <Radio disabled value={"round"}>
            Round Trip
          </Radio>
        </Radio.Group>

        <div className="md:ms-8 my-2 md:my-0 lg:ms-[110px]">
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
        <div className="grid grid-cols-12 md:space-x-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <FlightLocationsAutoComplete
              label="Origin Location"
              placeholder="Select Origin"
              initialValue={originLocation}
              onSelect={handleOriginSelect}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <FlightLocationsAutoComplete
              label="Destination Location"
              placeholder="Select Destination"
              initialValue={destinationLocation}
              onSelect={handleDestinationSelect}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <DatePicker
              defaultValue={departureDate}
              setValue={setDepartureDate}
              placeholder="Select Date"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <PassengerDropdown
              childrens={childrens}
              adults={adults}
              setChildrens={setChildrens}
              setAdults={setAdults}
            />
          </div>
          <div className="col-span-12 lg:col-span-2 flex items-center">
            <CustomButton
              type="submit"
              colored
              disabled={!activeSubmitBtn}
              style={{ width: "100%", marginBottom: "0", height: "45px" }}
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
