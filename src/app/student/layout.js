import InnerNavBar from "@/components/InnerNavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <InnerNavBar unit={"Student"} />
      {children}
    </>
  );
};

export default Layout;
