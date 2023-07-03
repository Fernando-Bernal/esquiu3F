import React, { useState } from "react";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

function DropdownCategory() {
    const [dropdown, setDropdown] = useState(false);

    const openCloseDropdown = () => {
		setDropdown(!dropdown);
	};

  return (
    <div>
        <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
            <DropdownToggle caret id="categoria">CATEGORIA</DropdownToggle>

            <DropdownMenu>
                <DropdownItem className="dropdown">
                    <Link to="/torneo-libre">Libres</Link>
                </DropdownItem>
                <DropdownItem className="dropdown">
                    <Link to="/torneo-30">+30</Link>
                </DropdownItem>
                <DropdownItem className="dropdown">
                    <Link to="/torneo-36">+36</Link>
                </DropdownItem>
                <DropdownItem className="dropdown">
                    <Link to="/torneo-40">+40</Link>
                </DropdownItem>
                <DropdownItem className="dropdown">
                    <Link to="/torneo-maxi">Super Maxi</Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
  )
}

export default DropdownCategory