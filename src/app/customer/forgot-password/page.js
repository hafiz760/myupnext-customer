'use client'

import ForgotPasswordForm from "@/components/customer/forgot-password/ForgotPasswordForm";
import withAuthLayout from "@/hoc/withAuthLayout";
import PlainCard from "@/shared/PlainCard";

const ForgotPassword = () => {
    return (
        <div className="xxs:w-full sm:w-[70%] md:w-full lg:w-[70%]">
            <PlainCard>
                <p className="text-primary text-[20px]">Forgot Password</p>
                <h4 className="text-[20px] font-bold mb-[30px]">Recover Your Account</h4>
                <ForgotPasswordForm />
            </PlainCard>
        </div>
    )
}

export default withAuthLayout(ForgotPassword);