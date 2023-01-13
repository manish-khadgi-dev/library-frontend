import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
