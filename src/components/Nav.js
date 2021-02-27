import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/story"
                    className={location.pathname === "/story" ? "nav-link active" : "nav-link"}>
                    Story
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio"
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/tech"
                    className={location.pathname === "/tech" ? "nav-link active" : "nav-link"}>
                    Tech Skills
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}
