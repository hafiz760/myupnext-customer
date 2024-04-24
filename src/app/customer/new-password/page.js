'use client'

import NewPasswordForm from "@/components/customer/new-password/NewPasswordForm";
import withAuthLayout from "@/hoc/withAuthLayout";
import PlainCard from "@/shared/PlainCard";

const NewPassword = () => {
    return (
        <div className="xxs:w-full sm:w-[70%] md:w-full lg:w-[70%]">
            <PlainCard>
                <p className="text-primary text-[20px]">Create New Password</p>
                <h4 className="text-[20px] font-bold mb-[30px]">We are glad you’re back!</h4>
                <NewPasswordForm />
            </PlainCard>
        </div>
    )
}

export default withAuthLayout(NewPassword);