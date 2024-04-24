import Link from "next/link";
import "../assets/css/auth.css";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";

const withVendorAuthLayout = (Component) => (props) => {
  return (
    <div className="w-full min-h-screen max-h-full auth-agent-background flex items-center justify-end place-items-center">
      <div className="container mx-auto h-full  place-items-center flex items-center justify-end">
        <Component />
      </div>
    </div>
  );
};

export default withVendorAuthLayout;
