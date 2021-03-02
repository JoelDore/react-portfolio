import React from "react";
import { Link, useLocation } from "react-router-dom";
import BootNav from 'react-bootstrap/Nav'
export default function Nav() {
    const location = useLocation();

    return (
        <BootNav className="ms-auto my-2 mb-md-0 px-3 text-end">
            <Link to="/" className={`${location.pathname === "/" ? "nav-link active" : "nav-link"}`}>
                Home
            </Link>
            <Link
                to="/story"
                className={location.pathname === "/story" ? "nav-link active" : "nav-link"}>
                Story
            </Link>
            <Link
                to="/portfolio"
                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
            </Link>
            <Link
                to="/skills"
                className={location.pathname === "/skills" ? "nav-link active" : "nav-link"}>
                Tech Skills
            </Link>
            <Link
                to="/contact"
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
            </Link>
        </BootNav >
    );
}
