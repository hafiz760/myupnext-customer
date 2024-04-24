import CategoresHeader from "@/shared/CategoresHeader";
import CustomFooter from "@/shared/CustomFooter";
import TopBar from "@/shared/TopBar";
import React from "react";

const HotelsLayout = ({ children }) => {
    return (
        <React.Fragment>
            <TopBar />
            {children}
            <CustomFooter />
        </React.Fragment>
    )
}

export default HotelsLayout;