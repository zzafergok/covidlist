import React from 'react';
import Header from './Header';
import logo from '../assets/images/logo.png';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header siteName={process.env.REACT_APP_WEB_SITE_TITLE} image={logo} />
      {children}
    </>
  );
};

export default Layout;
