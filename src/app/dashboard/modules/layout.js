import InnerNavBar from "@/components/InnerNavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <InnerNavBar unit={"Modules"} />
      {children}
    </>
  );
};

export default Layout;
