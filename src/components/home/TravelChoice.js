"use client";

import ChoiceImg from "@/assets/images/choice.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const TravelChoice = () => {
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
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
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
      img: (
        <Image
          className="w-[300px]"
          src={ChoiceImg}
          loading="lazy"
          alt="Feature"
        />
      ),
      top: "Theme parks, hong kong",
      title: "Hong Kong Disneyland Park Tickets",
      price: "75.50",
      discountPrice: "65.30",
      rating: "4.8",
      labels: ["Hong Kong Night Treats", "Best Seller"],
    },
    {
      img: (
        <Image
          className="w-[300px]"
          src={ChoiceImg}
          loading="lazy"
          alt="Feature"
        />
      ),
      top: "Theme parks, hong kong",
      title: "Hong Kong Disneyland Park Tickets",
      price: "75.50",
      discountPrice: "65.30",
      rating: "4.8",
      labels: ["Hong Kong Night Treats", "Best Seller"],
    },
    {
      img: (
        <Image
          className="w-[300px]"
          src={ChoiceImg}
          loading="lazy"
          alt="Feature"
        />
      ),
      top: "Theme parks, hong kong",
      title: "Hong Kong Disneyland Park Tickets",
      price: "75.50",
      discountPrice: "65.30",
      rating: "4.8",
      labels: ["Hong Kong Night Treats", "Best Seller"],
    },
    {
      img: (
        <Image
          className="w-[300px]"
          src={ChoiceImg}
          loading="lazy"
          alt="Feature"
        />
      ),
      top: "Theme parks, hong kong",
      title: "Hong Kong Disneyland Park Tickets",
      price: "75.50",
      discountPrice: "65.30",
      rating: "4.8",
      labels: ["Hong Kong Night Treats", "Best Seller"],
    },
    {
      img: (
        <Image
          className="w-[300px]"
          src={ChoiceImg}
          loading="lazy"
          alt="Feature"
        />
      ),
      top: "Theme parks, hong kong",
      title: "Hong Kong Disneyland Park Tickets",
      price: "75.50",
      discountPrice: "65.30",
      rating: "4.8",
      labels: ["Hong Kong Night Treats", "Best Seller"],
    },
    {
      img: (
        <Image
          className="w-[300px]"
          src={ChoiceImg}
          loading="lazy"
          alt="Feature"
        />
      ),
      top: "Theme parks, hong kong",
      title: "Hong Kong Disneyland Park Tickets",
      price: "75.50",
      discountPrice: "65.30",
      rating: "4.8",
      labels: ["Hong Kong Night Treats", "Best Seller"],
    },
    {
      img: (
        <Image
          className="w-[300px]"
          src={ChoiceImg}
          loading="lazy"
          alt="Feature"
        />
      ),
      top: "Theme parks, hong kong",
      title: "Hong Kong Disneyland Park Tickets",
      price: "75.50",
      discountPrice: "65.30",
      rating: "4.8",
      labels: ["Hong Kong Night Treats", "Best Seller"],
    },
    {
      img: (
        <Image
          className="w-[300px]"
          src={ChoiceImg}
          loading="lazy"
          alt="Feature"
        />
      ),
      top: "Theme parks, hong kong",
      title: "Hong Kong Disneyland Park Tickets",
      price: "75.50",
      discountPrice: "65.30",
      rating: "4.8",
      labels: ["Hong Kong Night Treats", "Best Seller"],
    },
  ];

  return (
    <div className="container w-full my-[20px] py-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-primary text-[20px]">Tripiphy Offers</p>
          <h4 className="text-[30px] font-bold mb-10">
            Travellers Favorite Choice
          </h4>
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
            <div
              key={index}
              className="border-dotted border-2  p-2 rounded-lg relative"
            >
              {choice.img}
              <sapn className="bg-black text-white flex gap-2 items-center justify-center w-[82px] h-[35px] rounded-full absolute top-4 left-4 z-50">
                <FaStar color="#FFC107" />
                {choice.rating}
              </sapn>
              <p className="text-primary font-semibold">{choice.top}</p>
              <p className="font-bold text-[18px]">{choice.title}</p>
              <span className="flex items-center flex-wrap">
                <p className="text-[15px] font-semibold">
                  From:
                  <span className="text-[16px] font-bold">
                    <del className="mr-1 opacity-45">${choice.price}</del>$
                    {choice.discountPrice}
                  </span>
                </p>
                <span
                  className="w-[126] h-[30px] rounded-2xl text-white text-sm font-medium p-1   ml-3"
                  style={{ background: "#FCB040" }}
                >
                  Save ${parseInt(choice.price - choice.discountPrice)}
                </span>
              </span>
              <span className=" flex gap-1 flex-wrap mt-3">
                {choice.labels.map((label,index) => (
                  <p key={index}
                    style={{ background: "#FDF0EC" }}
                    className=" h-[30px] px-2 py-1 text-sm text-center rounded-full text-primary"
                  >
                    {label}
                  </p>
                ))}
              </span>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TravelChoice;
