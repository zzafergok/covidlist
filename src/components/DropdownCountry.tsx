import React from "react";
import { Dropdown } from "react-bootstrap";

interface Props {}

const DropdownCountry = (props: Props) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle>Select Region</Dropdown.Toggle>

        <Dropdown.Menu className="bg-dark">
          <Dropdown.Item href="#/action-1" className="dropdown-item">
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1" className="dropdown-item">
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1" className="dropdown-item">
            Action
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownCountry;
