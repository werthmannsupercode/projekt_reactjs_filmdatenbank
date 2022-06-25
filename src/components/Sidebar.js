import React from "react";
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import "./../styles/Sidebar.css";

const Sidebar = (props) => {
    return (
        <Menu right {...props}>
            <Link className="menu-item" to="/upcoming">
                Neuerscheinungen
            </Link>
            <Link className="menu-item" to="/popular">
                Am beliebtesten
            </Link>
            <Link className="menu-item" to="/popularityasc">
                Am unbeliebtesten
            </Link>
            <Link className="menu-item" to="/releaseasc">
                Erscheinungsdatum Aufsteigend
            </Link>
            <Link className="menu-item" to="/releasedesc">
                Erscheinungsdatum Absteigend
            </Link>
            <Link className="menu-item" to="/voteaverageasc">
                Bewertung ø Aufsteigend
            </Link>
            <Link className="menu-item" to="/voteaveragedesc">
                Bewertung ø Absteigend
            </Link>
        </Menu>
    );
};

export default Sidebar;