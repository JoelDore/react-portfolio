import React from "react";
import { Link, useLocation } from "react-router-dom";
import BootNav from 'react-bootstrap/Nav';
import resume from '../assets/Resume.pdf'

export default function Nav() {
    const location = useLocation();

    return (
        <BootNav className="ms-auto my-2 mb-md-0 px-3 text-end">

            {/* Color Picker for nav bg */}

            <div className="m-2 d-flex align-center" style={{ width: "3rem" }}>
                🌈<input type="color" defaultValue="#1169bc" className="p-0" style={{ clipPath: "circle(41%)" }} />
            </div>

            {/***************************/}

            <Link
                to="/"
                className={
                    `${location.pathname === "/" || location.pathname === "/react-portfolio"
                        ? "nav-link active"
                        : "nav-link"}`
                }>
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
            <a href={resume} target="_blank" rel="noreferrer" className={"nav-link"} onClick={(e) => e.target.blur()}>
                Resume
            </a>
        </BootNav >
    );
}
