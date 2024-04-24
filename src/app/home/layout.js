import CategoresHeader from "@/shared/CategoresHeader";
import CustomFooter from "@/shared/CustomFooter";
import TopBar from "@/shared/TopBar";
import React from "react";

const DashboardLayout = ({ children }) => {
    return (
        <React.Fragment>
            <TopBar />
            <CategoresHeader />
            {children}
            <CustomFooter />
        </React.Fragment>
    )
}

export default DashboardLayout;