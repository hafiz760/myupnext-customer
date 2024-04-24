import Image from "next/image";
import React from "react";
import { Carousel } from "antd";

import GiftCard from "../../assets/images/gift-card.png";
import HomeHeroImg from "../../assets/images/home-hero.png";
import CustomButton from "@/shared/CustomButton";
import Link from "next/link";

const TopHeader = () => {
  const categories = [
    { title: "Popular destinations", href: "/search" },
    { title: "All categories", href: "/search" },
    { title: "Tours & experiences", href: "/search" },
    { title: "Attraction tickets", href: "/search" },
    { title: "Hotels", href: "/hotels" },
    { title: "Flights", href: "/flights" },
  ];

  const contentStyle = {
    height: "450px",
    width: "100%",
    color: "#fff",
    backgroundImage: `url(${HomeHeroImg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <React.Fragment>
      <div className="w-full">
        <Carousel autoplay autoplaySpeed={7000}>
          <div>
            <div
              style={contentStyle}
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-2xl md:text-[40px] font-extrabold mb-5">
                Be Richer With Memories
              </h1>
              <p className="mb-5 text-sm md:text-[17px] text-center px-2">
                From local escapes to far-flung adventures, find what makes you
                happy anytime, anywhere
              </p>
            </div>
          </div>
          <div>
            <div
              style={contentStyle}
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-2xl md:text-[40px] font-extrabold mb-5">
                Be Richer With Memories
              </h1>
              <p className="mb-5 text-sm md:text-[17px] text-center px-2">
                From local escapes to far-flung adventures, find what makes you
                happy anytime, anywhere
              </p>
            </div>
          </div>
          <div>
            <div
              style={contentStyle}
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-2xl md:text-[40px] font-extrabold mb-5">
                Be Richer With Memories
              </h1>
              <p className="mb-5 text-sm md:text-[17px] text-center px-2">
                From local escapes to far-flung adventures, find what makes you
                happy anytime, anywhere
              </p>
              <CustomButton colored>Search</CustomButton>
            </div>
          </div>
          <div>
            <div
              style={contentStyle}
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-2xl md:text-[40px] font-extrabold mb-5">
                Be Richer With Memories
              </h1>
              <p className="mb-5 text-sm md:text-[17px] text-center px-2">
                From local escapes to far-flung adventures, find what makes you
                happy anytime, anywhere
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default TopHeader;
