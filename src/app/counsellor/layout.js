import InnerNavBar from "@/components/InnerNavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <InnerNavBar unit={"Counsellor"} />
      {children}
    </>
  );
};

export default Layout;
