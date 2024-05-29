import Image from "next/image";
import React from "react";
import Cloth from "../../assets/images/ClothRental.png";
import testImage from "../../assets/images/vendor-bg.png";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import TourCard from "@/shared/TourCard";

function TraditionalClothRental() {
  const updatedName = (name) => {
    if (name.length > 42) {
      return `${name.slice(0, 42)}...`;
    }
    return name;
  };
  const data = [
    {
      Name: "The Original Ducktour Singapore",
      Rating: "4.4",
      NfRating: 177,
      price: "423",
      image: testImage,
      href: "/search",
    },
    {
      Name: "Gardens by the Bay",
      Rating: "4.7",
      NfRating: 230,
      price: "500",
      image: testImage,
      href: "/search",
    },
    {
      Name: "Universal Studios Singapore",
      Rating: "4.6",
      NfRating: 190,
      price: "600",
      image: testImage,
      href: "/search",
    },
    {
      Name: "Singapore Zoo",
      Rating: "4.5",
      NfRating: 210,
      price: "350",
      image: testImage,
      href: "/search",
    },
    {
      Name: "Sentosa Island",
      Rating: "4.8",
      NfRating: 250,
      price: "700",
      image: testImage,
      href: "/search",
    },
  ];
  return (
    <div className="w-full px-3 xl:px-0 max-w-[1160px] mx-auto">
      <div
        style={{ background: "rgb(230, 247, 242)" }}
        className="mt-0 mb-8 p-5 rounded-2xl items-center"
      >
        <div className="flex mb-4 justify-between w-100% items-center">
          <div className="flex  items-center">
            <Image
              style={{}}
              className="w-[32px] h-[32px] mr-2"
              src={Cloth}
              alt="calender"
            />
            <span
              style={{
                fontSize: "20px",
                lineHeight: "132%",
              }}
              className=" font-semibold"
            >
              Traditional clothes rental
            </span>
          </div>
          <div className=" underline cursor-pointer">
            <Link href="/Search">See All</Link>
          </div>
        </div>
        <div className="container xl:overflow-hidden py-2 px-0 mx-auto overflow-auto">
          <div className="flex xl:grid xl:grid-cols-5 gap-5 ">
            {data.map((card) => (
              <TourCard
                Name={card.Name}
                NfRating={card.NfRating}
                price={card.price}
                Rating={card.Rating}
                image={card.image}
                href={card.href}
                icon={<FaStar />}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraditionalClothRental;
