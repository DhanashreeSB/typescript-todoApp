import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTE_CONSTANTS from "./../../Constants/routes";


const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <ul className="left">
                    <li><Link to={ROUTE_CONSTANTS.home}>Home</Link></li>
                    <li><Link to={ROUTE_CONSTANTS.contacts}>Contact</Link></li>
                    <li><Link to={ROUTE_CONSTANTS.schedule}>Schedule</Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;