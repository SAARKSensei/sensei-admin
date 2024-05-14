import InnerNavBar from "@/components/InnerNavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <InnerNavBar unit={"student"} />
      {children}
    </>
  );
};

export default Layout;
