import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../logo.png";
// import DropdownCountry from "./DropdownCountry";

interface Props {}

const Header = (props: Props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt="covid_baby"
              src={logo}
              className="d-inline-block align-top"
            />{" "}
            {process.env.REACT_APP_WEB_SITE_TITLE}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* <Navbar.Text>
              <DropdownCountry />
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
