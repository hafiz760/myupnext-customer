import RegisterForm from "@/components/customer/register/RegisterForm";
import withAuthLayout from "@/hoc/withAuthLayout";
import PlainCard from "@/shared/PlainCard";
import CustomButton from "@/shared/CustomButton";
import Link from "next/link";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const CustomerRegister = () => {
    return (
        <div className="xxs:w-full sm:w-[70%] md:w-full lg:w-[70%]">
            <PlainCard>
                <p className="text-primary text-[20px]">Lets Get Started</p>
                <h4 className="text-[20px] font-bold mb-[30px]">Create an Account</h4>
                <RegisterForm />
                <div className="flex items-center my-5">
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                    <span className="px-3 text-gray-500 bg-white">OR</span>
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <CustomButton style={{ width: '100%' }}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaGoogle />
                        <p className="m-0 p-0">Login with Google</p>
                    </div>
                </CustomButton>
                <CustomButton style={{ width: '100%' }}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaFacebookF />
                        <p className="m-0 p-0">Login with Facebook</p>
                    </div>
                </CustomButton>
                <CustomButton style={{ width: '100%' }}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaApple />
                        <p className="m-0 p-0">Login with Apple</p>
                    </div>
                </CustomButton>
                <p className="mt-3 text-center">Already have an account? <Link href='/customer/login' className="text-primary font-bold">SIGN IN HERE</Link></p>
            </PlainCard>
        </div>
    )
}

export default withAuthLayout(CustomerRegister);