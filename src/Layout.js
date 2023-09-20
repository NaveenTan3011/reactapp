import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children, count,  }) => {
  return (
    <div>
      <Navbar count={count}  />
      {children}
    </div>
  );
};

export default Layout;
