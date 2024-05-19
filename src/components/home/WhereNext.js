"use client";

import NextImg from "@/assets/images/next.png";
import CustomButton from "@/shared/CustomButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Button } from "antd";
import { toast } from "react-toastify";

const WhereNext = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    afterChange: (current) => setCurrentSlide(current),
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const choices = [
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
    {
      img: NextImg,
      title: "Dubai",
      discounts: [
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
        "Up to 15% off on hotels",
      ],
    },
  ];

  return (
    <div
      className="container w-full my-[20px] py-10 "
      style={{
        background: "#FDF0EC",
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-primary text-[20px]">Popular Destinations</p>
          <h4 className="text-[30px] font-bold">Where To Next?</h4>
        </div>
        <div className="flex gap-5">
          <button
            onClick={handlePrevious}
            className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center hover:bg-primary hover:text-white hover:border-primary"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={handleNext}
            className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center hover:bg-primary hover:text-white hover:border-primary"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {choices.map((choice, index) => {
          return (
            <div key={index} className="group">
              <div
                className="w-[95%] min-h-[300px] p-3 flex items-end rounded-lg relative "
                style={{
                  backgroundImage: `url(${choice.img.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className=" z-50 text-white group-hover:opacity-0 bg-black rounded-full p-1 absolute top-2 right-2">
                  18 Discounts Available
                </p>
                <p className="font-bold text-[22px] group-hover:opacity-0 text-white">
                  {choice.title}
                </p>
                <div className=" group-hover:opacity-85  hover:cursor-pointer transition-all w-full h-full bg-primary opacity-0 right-0 rounded-lg absolute top-0">
                  <div className="w-full flex items-center justify-center h-full flex-col gap-4">
                    <p className=" z-50 text-white  bg-black rounded-full p-1 w-[190px] h-[32px] text-center">
                      18 Discounts Available
                    </p>
                    <h3 className="text-white font-bold text-4xl">
                      {choice.title}
                    </h3>
                    <div>
                      <ul>
                        {choice.discounts.map((dsc, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-white"
                          >
                            <FaCheck />
                            {dsc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="bg-white  group-hover:!opacity-1 text-primary font-bold rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2">
                      See More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="text-center my-8">
        <CustomButton colored>See All Destinations</CustomButton>
      </div>
    </div>
  );
};

export default WhereNext;
