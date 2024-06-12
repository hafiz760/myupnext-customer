import AgentImg from "@/assets/images/agent-signup.png";
import MerchantImg from "@/assets/images/merchant-signup.png";
import CustomButton from "@/shared/CustomButton";
import Image from "next/image";
import { useState } from "react";
import AgentForm from "./AgentForm";
import PartnerBg from "@/assets/images/vendor-bg.png";
import PlainCard from "@/shared/PlainCard";
import LargePageHeader from "@/shared/LargePageHeader";
import AgentFormStepper from "../vendor/AgentFormStepper";

const SelectPartner = () => {
  const [vendorType, setVendorType] = useState("agent");
  const [showForm, setShowForm] = useState(false);

  const vendorTypes = [
    {
      name: "agent",
      image: AgentImg,
      title: "Agent Marketplace",
      desc: "With partners across Asia and beyond, Klook is a world leading travel and local leisure booking platform for the.",
    },
    {
      name: "merchant",
      image: MerchantImg,
      title: "B2B Merchants",
      desc: "With partners across Asia and beyond, Klook is a world leading travel and local leisure booking platform for the.",
    },
  ];

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <LargePageHeader bg={PartnerBg}>
      {!showForm ? (
        <div className="flex items-center justify-center lg:justify-end">
          <PlainCard customClass="w-[70%] lg:w-1/2">
            <h4 className="font-bold text-primary">Business Category</h4>
            <h2 className="font-bold">
              What does your business provide? Select one.
            </h2>
            <div>
              {vendorTypes.map((vendor, index) => (
                <div
                  onClick={() => setVendorType(vendor.name)}
                  key={index}
                  className={`${
                    showForm ? "hidden" : "flex"
                  } flex-col md:flex-row items-center justify-center gap-5 border rounded-lg p-5 my-5 cursor-pointer ${
                    vendorType === vendor.name && "bg-[#0D232E]"
                  }`}
                >
                  <Image src={vendor.image} alt="Vendor" />
                  <div>
                    <h2
                      className={`font-bold ${
                        vendorType === vendor.name && "text-white"
                      }`}
                    >
                      {vendor.title}
                    </h2>
                    <p
                      className={`${
                        vendorType === vendor.name && "text-white"
                      }`}
                    >
                      {vendor.desc}
                    </p>
                  </div>
                </div>
              ))}
              <CustomButton
                onClick={handleShowForm}
                colored
                style={{ width: "100%", margin: "20px 0" }}
              >
                Next
              </CustomButton>
            </div>
          </PlainCard>
        </div>
      ) : vendorType === "agent" ? (
        <AgentForm />
      ) : null}
    </LargePageHeader>
  );
};

export default SelectPartner;
