"use client";
import React from "react";
import "../../assets/css/experiences.css";
import SearchInput from "@/shared/SearchInput";
import testImage from "../../assets/images/about1.png";
import Link from "next/link";
import Image from "next/image";

function Experiences() {
  const data = [
    {
      city: "Tokyo",
      activities: "400+ activities",
      image: testImage,
      href: "/search",
    },
    {
      city: "Seoul",
      activities: "300+ activities",
      image: testImage,
      href: "/search",
    },
    {
      city: "Kyoto",
      activities: "200+ activities",
      image: testImage,
      href: "/search",
    },
    {
      city: "Yamanashi",
      activities: "50+ activities",
      image: testImage,
      href: "/search",
    },
    {
      city: "Taipei",
      activities: "300+ activities",
      image: testImage,
      href: "/search",
    },
    {
      city: "New York",
      activities: "100+ activities",
      image: testImage,
      href: "/search",
    },
    {
      city: "Bangkok",
      activities: "400+ activities",
      image: testImage,
      href: "/search",
    },
  ];
  return (
    <div
      className="experience text-white"
      style={{
        minHeight: "85vh",
      }}
    >
      <div className=" w-full max-w-[1160px] px-2 xl:px-0 sm:pt-36 pt-16 xl:pt-16 mx-auto">
        <div>
          <div>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "600",
                lineHeight: "132%",
                margin: "0",
              }}
            >
              Tours & experiences
            </h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "20px",
                fontWeight: "600",
                lineHeight: "132%",
                marginTop: "8px",
              }}
            >
              Explore experiences, spas, tours and more
            </h2>
          </div>
          <SearchInput className="mt-10 md:w-[700px] w-full" />
        </div>

        <div className="w-full">
          <div className=" flex gap-4 mt-10 overflow-x-auto xl:overflow-hidden">
            {data.map((card, index) => (
              <Link key={index} href={card.href} className="card">
                <Image className="image" src={card.image} alt={card.city} />
                <p
                  className="cursor-pointer  text-black  whitespace-nowrap"
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "150%",
                  }}
                >
                  {card.city}
                </p>
                <span
                  style={{
                    color: "#757575",
                  }}
                >
                  {card.activities}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
