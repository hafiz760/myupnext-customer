"use client";

import Link from "next/link";
import { Card } from "antd";
import { useState } from "react";
const CategoresHeader = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const categories = [
    {
      title: "Popular destinations",
      href: "/search",
    },
    { title: "All categories", href: "/search" },
    {
      title: "Tours & experiences",
      href: "/experiences",
      subCategory: [
        { name: "Tours", href: "/search" },
        { name: "Cruises", href: "/search" },
        { name: "Massages & hot springs", href: "/search" },
        { name: "Water Activities", href: "/search" },
        { name: "Water Activities", href: "/search" },
        { name: "Outdoor & sports activities", href: "/search" },
        { name: "Cultural experience", href: "/search" },
      ],
    },
    {
      title: "Attraction tickets",
      href: "/search",

      subCategory: [
        { name: "Theme parks", href: "/search" },
        { name: "Water parks", href: "/search" },
        { name: "Museums", href: "/search" },
        { name: "Parks & gardens", href: "/search" },
        { name: "Zoos & aquariums", href: "/search" },
        { name: "Cable cars", href: "/search" },
        { name: "Observation decks", href: "/search" },
        { name: "Historical sites", href: "/search" },
        { name: "Playgrounds", href: "/search" },
        { name: "Indoor games", href: "/search" },
        { name: "Attraction passes", href: "/search" },
      ],
    },
    { title: "Hotels", href: "/hotels" },
    { title: "Flights", href: "/flights" },
    {
      title: "Transport",
      href: "/transport",
      subCategory: [
        { name: "Train tickets", href: "/search" },
        { name: "Japan rail passes", href: "/search" },
        { name: "Europe rail passes", href: "/search" },
        { name: "Metro passes & cards", href: "/search" },
        { name: "Private airport transfers", href: "/search" },
        { name: "Airport trains & buses", href: "/search" },
        { name: "Ferries", href: "/search" },
        { name: "Buses", href: "/search" },
        { name: "Scooters & bikes", href: "/search" },
        { name: "Car charters", href: "/search" },
      ],
    },
  ];

  return (
    <div className="container mx-auto flex my-5 items-center justify-center">
      <div className="flex items-center justify-center w-full space-x-4 overflow-x-auto">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link
                href={category.href}
                className="hover:text-primary relative"
              >
                <p className="cursor-pointer font-semibold whitespace-nowrap">
                  {category.title}
                </p>
              </Link>
              {hoveredCategory === index && category.subCategory && (
                <Card
                  className=" absolute z-50"
                  style={{ minWidth: "200px" }}
                >
                  {category.subCategory &&
                    category.subCategory.map((subcat) => (
                      <Link href={subcat.href} className="hover:text-primary">
                        <p className="cursor-pointer pt-1 font-normal whitespace-nowrap">
                          {subcat.name}
                        </p>
                      </Link>
                    ))}
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoresHeader;
