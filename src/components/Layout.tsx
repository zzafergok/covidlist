import React from "react";
import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.StatelessComponent<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
