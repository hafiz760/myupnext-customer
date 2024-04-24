"use client";

import LargePageHeader from "@/shared/LargePageHeader";
import PartnerBg from '@/assets/images/merchant-hero.png';
import React from "react";
import CustomButton from "@/shared/CustomButton";
import PartnerUs from "@/components/partner/PartnerUs";
import { useRouter } from "next/navigation";

const Partner = () => {
    const router = useRouter()
    return (
        <React.Fragment>
            <LargePageHeader bg={PartnerBg}>
                <h1 className="text-5xl text-white font-bold">Boost your business with tripiphy</h1>
                <p className="text-white mt-5">With partners across Asia and beyond, Tripiphy is a world leading travel and local leisure booking platform for the Free Independent Travel (FIT) market.</p>
                <div className="mt-10">
                    <CustomButton onClick={() => router.push('/partner/signup')} style={{ backgroundColor: '#fff', color: '#ee5931' }}>Sign Up</CustomButton>
                    <CustomButton colored>Login</CustomButton>
                </div>
            </LargePageHeader>
            <PartnerUs />
        </React.Fragment>
    )
}

export default Partner