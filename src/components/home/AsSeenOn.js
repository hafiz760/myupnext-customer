import React from "react";
import fb from "../../assets/images/fb.svg";
import twitter from "../../assets/images/twiter.svg";
import pinterest from "../../assets/images/pinterest.svg";
import Image from "next/image";

export default function AsSeenOn() {
  const images = [fb, twitter, pinterest];

  return (
    <div className="flex justify-center h-[105px] items-center py-4">
      <div
        className="flex items-center border rounded-full px-4 h-[50px] py-1"
        style={{ borderColor: "#C4CAD4" }}
      >
        <p className="mr-4">Follow</p>
        <ul className="flex space-x-2">
          {images.map((img, index) => (
            <li key={index} className="flex items-center p-1 justify-center border rounded-full w-[25px] cursor-pointer !text-black h-[25px]">
              <Image src={img} alt={`social-${index}`}  />
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-4 flex items-center h-[112px] space-x-4">
        <Image src={twitter} alt="TechCrunch" />
        <Image src={twitter} alt="CNBC" />
        <Image src={twitter} alt="WIT" />
        <Image src={twitter} alt="SCMP" />
        <Image src={twitter} alt="Forbes" />
        <Image src={twitter} alt="TravelDailyNews" />
        <Image src={twitter} alt="e27" />
        <Image src={twitter} alt="TNW" />
      </div>
    </div>
  );
}
