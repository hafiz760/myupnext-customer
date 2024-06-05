"use client";

import { MdCelebration } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Logo from "../assets/images/NewLogo.png";
import Currency from "../assets/images/currency.png";
import Flag from "../assets/images/flag.png";
import CustomButton from "./CustomButton";
import Link from "next/link";
import NavDrawer from "./NavDrawer";

const TopBar = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="bg-primary flex items-center justify-center space-x-4 py-2 text-white">
        <MdCelebration />
        <p>Get Additional 10% OFF On Your First Booking Today! </p>
        <MdCelebration />
      </div>
      <div className="md:container px-2 md:px-0 md:mx-auto flex lg:flex-row items-center justify-between my-5">
        <div className="flex items-center justify-start space-x-5 md:mb-3 lg:mb-0">
          <Link href="/home">
            <Image
              src={Logo}
              className="cursor-pointer w-[150px] md:w-[250px] h-[50px] md:h-[65px]"
              alt="Logo"
              loading="lazy"
            />
          </Link>
          <div className="hidden md:d-block">
            <fieldset
              className={`border border-gray-700 p-1 text-center rounded-full`}
            >
              <input
                className={`ps-3 py-1 w-full border-none focus:border-none focus:outline-none rounded-md`}
                placeholder="Search"
                autoComplete="off"
              />
            </fieldset>
          </div>
        </div>
        <div className="hidden md:flex md:flex-row items-center justify-start space-x-4">
          <div className="flex space-x-4 my-3">
            <Image
              src={Currency}
              className="w-[30px]"
              alt="currency"
              loading="lazy"
            />
            <Image src={Flag} className="w-[30px]" alt="flag" loading="lazy" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <CustomButton onClick={() => router.push("/partner")}>
              Partner With Us
            </CustomButton>
            <CustomButton onClick={() => router.push("/customer/register")}>
              Sign Up
            </CustomButton>
            <CustomButton
              onClick={() => router.push("/customer/login")}
              colored
            >
              Sign In
            </CustomButton>
          </div>
        </div>
        <div className=" md:hidden">
          <NavDrawer />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
