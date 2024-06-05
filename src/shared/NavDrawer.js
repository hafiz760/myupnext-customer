import React, { useState } from "react";
import { Button, Drawer, Menu, Space } from "antd";
import { createStyles, useTheme } from "antd-style";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import "../assets/css/Drawer.css";

import Logo from "../assets/images/NewLogo.png";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const useStyle = createStyles(({ token }) => ({
  "my-drawer-body": {
    background: token.blue1,
  },
  "my-drawer-mask": {
    boxShadow: "none",
  },
  "my-drawer-header": {
    background: token.green1,
  },
  "my-drawer-footer": {
    color: token.colorPrimary,
  },
  "my-drawer-content": {
    borderLeft: "2px solid gray",
  },
}));
const NavDrawer = () => {
  const router = useRouter();
  const [open, setOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();
  const toggleDrawer = (idx, target) => {
    setOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  const classNames = {
    body: styles["my-drawer-body"],
    mask: styles["my-drawer-mask"],
    header: styles["my-drawer-header"],
    footer: styles["my-drawer-footer"],
    content: styles["my-drawer-content"],
  };
  const drawerStyles = {
    mask: {
      backdropFilter: "blur(0px)",
    },
    content: {
      boxShadow: "-10px 0 10px #666",
    },
    header: {
      borderBottom: `1px solid #e5e7eb`,
      padding: "10px",
      background: "white",
    },
    body: {
      fontSize: token.fontSizeLG,
      background: "white",
      padding: "16px",
    },
    footer: {
      borderTop: `1px solid ${token.colorBorder}`,
    },
  };

  const drawerTitle = (
    <div>
      <Link href="/home">
        <Image
          src={Logo}
          className="cursor-pointer w-[200px] h-[50px]"
          alt="Logo"
          loading="lazy"
        />
      </Link>
    </div>
  );
  const items = [
    {
      key: "popular",
      label: "Popular destinations",
      children: [
        { key: "/destinations", label: "Popular destinations", href: "/tour" },
      ],
    },
    {
      key: "categories",
      label: "All categories",
      children: [
        { key: "/categories", label: "All categories", href: "/tour" },
      ],
    },
    {
      key: "tours",
      label: "Tours & experiences",
      children: [
        { key: "/experiences", label: "Tours & experiences", href: "/tour" },
        { key: "/tour", label: "Tours", href: "/tour" },
        { key: "/cruises", label: "Cruises", href: "/search" },
        { key: "/massages", label: "Massages & hot springs", href: "/search" },
        { key: "/water", label: "Water Activities", href: "/search" },
        {
          key: "/outdoor",
          label: "Outdoor & sports activities",
          href: "/search",
        },
        { key: "/cultural", label: "Cultural experience", href: "/search" },
      ],
    },
    {
      key: "tickets",
      label: "Attraction tickets",
      children: [
        {
          key: "/AttractionTickets",
          label: "Attraction tickets",
          href: "/search",
        },
        { key: "/theme", label: "Theme parks", href: "/search" },
        { key: "/water", label: "Water parks", href: "/search" },
        { key: "/museums", label: "Museums", href: "/search" },
        { key: "/parks", label: "Parks & gardens", href: "/search" },
        { key: "/zoos", label: "Zoos & aquariums", href: "/search" },
        { key: "/cable", label: "Cable cars", href: "/search" },
        { key: "/observation", label: "Observation decks", href: "/search" },
        { key: "/historical", label: "Historical sites", href: "/search" },
        { key: "/playgrounds", label: "Playgrounds", href: "/search" },
        { key: "/indoor", label: "Indoor games", href: "/search" },
        { key: "/passes", label: "Attraction passes", href: "/search" },
      ],
    },
    {
      key: "hotels",
      label: "Hotels",
      children: [{ key: "/hotels", label: "Hotels", href: "/tour" }],
    },
    {
      key: "flights",
      label: "Flights",
      children: [{ key: "/Flights", label: "Flights", href: "/tour" }],
    },
    {
      key: "transport",
      label: "Transport",
      children: [
        { key: "/transport", label: "Transport", href: "/search" },
        { key: "/train", label: "Train tickets", href: "/search" },
        { key: "/japan", label: "Japan rail passes", href: "/search" },
        { key: "/europe", label: "Europe rail passes", href: "/search" },
        { key: "/metro", label: "Metro passes & cards", href: "/search" },
        {
          key: "/airport",
          label: "Private airport transfers",
          href: "/search",
        },
        {
          key: "/airportTransport",
          label: "Airport trains & buses",
          href: "/search",
        },
        { key: "/ferries", label: "Ferries", href: "/search" },
        { key: "/buses", label: "Buses", href: "/search" },
        { key: "/scooters", label: "Scooters & bikes", href: "/search" },
        { key: "/car", label: "Car charters", href: "/search" },
      ],
    },
  ];

  const onClick = (e) => {
    router.push(e.key);
  };
  const customCloseIcon = (
    <MdClose size={30} className="absolute right-[20px] top-[23px]" /> // Customize as needed
  );
  return (
    <>
      <Space>
        <Button
          className="bg-primary rounded border-0"
          onClick={() => toggleDrawer(0, true)}
        >
          <TfiMenuAlt size={20} className="text-white" />
        </Button>
      </Space>
      <Drawer
        title={drawerTitle}
        placement="right"
        closeIcon={customCloseIcon}
        onClose={() => toggleDrawer(0, false)}
        open={open[0]}
        classNames={classNames}
        styles={drawerStyles}
      >
        <div>
          <div className="mb-7">
            <Menu
              onClick={onClick}
              style={{
                width: "100%",
              }}
              mode="inline"
              items={items}
            />
          </div>
          <div className="flex flex-col">
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
      </Drawer>
    </>
  );
};

export default NavDrawer;
