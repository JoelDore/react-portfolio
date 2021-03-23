import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import { Container, Navbar } from 'react-bootstrap'
import profileImg from '../assets/images/profile.jpg'
import './header.css'

const Header = () => {
    const location = useLocation()

    const [color, setColor] = useState("transparent")

    const handleColorChange = (e) => {
        setColor(e.target.value)
        console.log("%c" + e.target.value, "color:orange")
    }

    return (
        <Navbar
            fixed="top"
            expand="sm"
            variant={location.pathname === "/" || location.pathname === "/react-portfolio" ? "light" : "dark"}
            style={{ backgroundColor: color }}
        >
            <Container fluid>
                <Navbar.Brand as="div">
                    <img
                        src={profileImg}
                        width="40"
                        height="40"
                        alt="Profile"
                        className="d-inline-block align-top rounded-circle"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navLinks" />
                <Navbar.Collapse id="navLinks" className="h-100">
                    <Nav handleColorChange={handleColorChange} />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}



export default Header
