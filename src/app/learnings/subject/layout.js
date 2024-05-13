import InnerNavBar from "@/components/InnerNavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <InnerNavBar unit={"Subject"} />
      {children}
    </>
  );
};

export default Layout;
