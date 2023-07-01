import React, { useState } from "react";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

function DropdownCampus3() {
	const [dropdown, setDropdown] = useState(false);

	const openCloseDropdown = () => {
		setDropdown(!dropdown);
	};

	return <div>
        <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
            <DropdownToggle caret className="ahedear">Campus3</DropdownToggle>

            <DropdownMenu>
                <DropdownItem className="dropdown">
                    <Link to="/">Nuestras instalaciones</Link>
                </DropdownItem>
                <DropdownItem className="dropdown">
                    <Link to="/">Cancha sintética</Link>
                </DropdownItem>
                {/* <DropdownItem className="dropdown">
                    <Link to="/">Cancha padel</Link>
                </DropdownItem>
                <DropdownItem className="dropdown">
                    <Link to="/">Salón de eventos</Link>
                </DropdownItem>
                <DropdownItem className="dropdown">
                    <Link to="/">Clínica deportiva</Link>
                </DropdownItem> */}
                <DropdownItem className="dropdown">
                    <Link to="/">Escuela de fútbol</Link>
                </DropdownItem>
                <DropdownItem className="dropdown">
                    <Link to="/">Torneos nacionales</Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>;
}

export default DropdownCampus3;


