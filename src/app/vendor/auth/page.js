"use client";

import AuthForm from "@/components/vendor/AuthForm";
import WithVendorAuthLayout from "@/hoc/WithVendortAuthLayout";
import PlainCard from "@/shared/PlainCard";

const Page = () => {
  return (
    <div className="xxs:w-full sm:w-[70%] md:w-full lg:w-[612px]">
      <AuthForm />
    </div>
  );
};

export default WithVendorAuthLayout(Page);
