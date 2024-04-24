import React, { useState } from "react";
import AgentImg from "@/assets/images/agent-signup.svg";
import MerchantImg from "@/assets/images/merchant-signup.svg";
import CustomButton from "@/shared/CustomButton";
import PlainCard from "@/shared/PlainCard";
import Image from "next/image";
import AgentFormStepper from "./AgentFormStepper";

const AuthForm = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const businessCategories = [
    {
      id: "1",
      title: "Agent Marketplace",
      desc: "With partners across Asia and beyond, Klook is a world-leading travel and local leisure booking platform for the.",
      img: AgentImg,
    },
    {
      id: "2",
      title: "B2B Merchants",
      desc: "With partners across Asia and beyond, Klook is a world-leading travel and local leisure booking platform for the.",
      img: MerchantImg,
    },
  ];

  const handleShowForm = () => {
    if (activeIndex) {
      setShowForm(true);
    }
  };

  return (
    <div>
      {!showForm ? (
        <PlainCard>
          <p className="text-primary text-[20px]">Business Category</p>
          <h4 className="text-[20px] font-bold mb-[30px]">
            What does your business provide? Select one.
          </h4>
          {businessCategories.map((business) => (
            <div
              key={business.id}
              className={`py-4 md:py-0 flex flex-col md:flex-row items-center my-3 rounded-2xl h-auto md:h-[200px] px-4 cursor-pointer ${
                activeIndex === business.id ? "bg-[#0D232E]" : "bg-[#FDF0EC]"
              }`}
              onClick={() => setActiveIndex(business.id)}
            >
              <div>
                <Image
                  src={business.img}
                  loading="lazy"
                  className="w-[100px] h-[100px] md:h-[200px] md:w-[200px] rounded-[16px]"
                />
              </div>
              <div
                className={`md:ps-4 ${
                  activeIndex === business.id ? "text-white" : "text-[#0D232E]"
                }`}
              >
                <h3 className="text-[22px] md:text-[32px] font-bold">
                  {business.title}
                </h3>
                <p className="text-[14px] md:text-[18px] font-normal">
                  {business.desc}
                </p>
              </div>
            </div>
          ))}
          <CustomButton
            colored
            style={{ width: "100%" }}
            onClick={handleShowForm}
          >
            Next
          </CustomButton>
        </PlainCard>
      ) : (
        <AgentFormStepper />
      )}
    </div>
  );
};

export default AuthForm;
