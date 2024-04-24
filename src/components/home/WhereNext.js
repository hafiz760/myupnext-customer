"use client";

import NextImg from "@/assets/images/next.png";
import CustomButton from "@/shared/CustomButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhereNext = () => {
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const choices = [
    { img: NextImg, title: "Dubai" },
    { img: NextImg, title: "Dubai" },
    { img: NextImg, title: "Dubai" },
    { img: NextImg, title: "Dubai" },
    { img: NextImg, title: "Dubai" },
    { img: NextImg, title: "Dubai" },
    { img: NextImg, title: "Dubai" },
    { img: NextImg, title: "Dubai" },
    { img: NextImg, title: "Dubai" },
  ];

  return (
    <div className="container w-full my-[20px] py-10">
      <p className="text-primary text-[20px]">Popular Destinations</p>
      <h4 className="text-[30px] font-bold">Where To Next?</h4>
      <Slider {...settings}>
        {choices.map((choice, index) => {
          return (
            <div key={index}>
              <div
                className="w-[95%] min-h-[300px] p-3 flex items-end rounded-lg"
                style={{
                  backgroundImage: `url(${choice.img.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="font-bold text-[22px] text-white">
                  {choice.title}
                </p>
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
