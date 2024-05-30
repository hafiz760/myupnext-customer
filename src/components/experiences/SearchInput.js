import Image from "next/image";
import React from "react";
import location from "../../assets/images/location.png";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
function SearchInput({ className }) {
  return (
    <div
      style={{
        padding: "6px 8px 6px 20px",
        borderRadius: "999px",
        overflow: "hidden",
        background: "#fff",
      }}
      className={className}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
            src={location}
            alt="location"
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "none",
              color: "black",
              outline: "none",
              width: "100%",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "132%",
            }}
          />
        </div>
        <div>
          <Button
            style={{
              background: "#ff5b00",
              borderRadius: " 200px",
              width: "120px",
              height: "52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "none",
              color: "#fff",
            }}
            className=" focus:shadow-none focus:outline-none hover:border-primary"
            icon={<SearchOutlined width={20} height={20} />}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
