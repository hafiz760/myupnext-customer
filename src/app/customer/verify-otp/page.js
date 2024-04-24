'use client'

import OtpForm from "@/components/customer/otp/OtpForm";
import withAuthLayout from "@/hoc/withAuthLayout";
import PlainCard from "@/shared/PlainCard";

const CustomerOtp = () => {
    return (
        <div className="xxs:w-full sm:w-[70%] md:w-full lg:w-[70%]">
            <PlainCard>
                <p className="text-primary text-[20px]">Email Verification</p>
                <h4 className="text-[20px] font-bold mb-[30px]">Verify Your Email Address</h4>
                <p>We have just sent a 4-digit OTP to your registered email address for verification and authentication purposes.</p>
                <OtpForm />
            </PlainCard>
        </div>
    )
}

export default withAuthLayout(CustomerOtp);