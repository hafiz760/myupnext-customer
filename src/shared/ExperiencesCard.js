import Image from "next/image";
import Link from "next/link";
import React from "react";

function ExperiencesCard({ href, image, Name, Rating, NfRating, price, icon }) {
  const updatedName = (name) => {
    if (name.length > 42) {
      return `${name.slice(0, 42)}...`;
    }
    return name;
  };
  return (
    <div className=" hover:shadow-lg hover:-translate-y-1 !rounded-bl-xl !rounded-br-xl transition-all min-w-[216px] xl:min-w-[208px] h-[272px] tracking-wide cursor-pointer">
      <Link href={href}>
        <div className=" !h-[55%]">
          <Image
            className="h-full !rounded-tl-xl !rounded-tr-xl !rounded-none"
            src={image}
          />
        </div>
        <div
          className="h-[45%] bg-white !rounded-bl-xl !rounded-br-xl !rounded-none"
          style={{
            padding: "8px 12px 12px",
          }}
        >
          <div>
            <div
              style={{
                lineHeight: "20px",
              }}
              className="content"
            >
              <h1 className=" font-semibold   text-md text-black  w-full">
                {updatedName(Name)}
              </h1>
              <span className="flex gap-1 items-center">
                <span
                  className="flex items-center gap-0.5 text-xs"
                  style={{ color: "#f09b0a" }}
                >
                  <p>{icon}</p>
                  <p className="text-sm">{Rating}</p>
                </span>
                <span className=" text-xs" style={{ color: "#757575" }}>
                  {`(${NfRating})`}
                </span>
              </span>
            </div>
            <div className="price pt-3">
              <div>
                <span className=" text-sm font-semibold">US$ {price}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ExperiencesCard ;
