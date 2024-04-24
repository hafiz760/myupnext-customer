"use client"

import LargePageHeader from "@/shared/LargePageHeader"
import React from "react"
import PartnerBg from '@/assets/images/vendor-bg.png';
import PlainCard from "@/shared/PlainCard";
import SelectPartner from "@/components/partner/SelectPartner";

const page = () => {
    return (
        <React.Fragment>
            <LargePageHeader bg={PartnerBg}>
                <div className="flex items-center justify-center lg:justify-end">
                    <PlainCard customClass="w-[70%] lg:w-1/2">
                        <h4 className="font-bold text-primary">Business Category</h4>
                        <h2 className="font-bold">What does your business provide?
                            Select one.</h2>
                        <SelectPartner />
                    </PlainCard>
                </div>
            </LargePageHeader>
        </React.Fragment>
    )
}

export default page