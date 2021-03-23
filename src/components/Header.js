import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import { Container, Navbar } from 'react-bootstrap'
import profileImg from '../assets/images/profile.jpg'
import './header.css'

const Header = () => {
    const location = useLocation()
    const defaultNavTheme = location.pathname === "/" || location.pathname === "/react-portfolio" ? "light" : "dark"

    const [color, setColor] = useState("transparent")
    const [navTheme, setNavTheme] = useState(defaultNavTheme)

    useEffect(() => {
        if (color === 'transparent') return

        // convert hex value to rgb as [r, g, b]
        const rgb = color.split("#")[1].match(/(..?)/g).map(hh => parseInt(hh, 16))

        // http://www.w3.org/TR/AERT#color-contrast
        const brightness = Math.round((
            (parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)
        ) / 1000);

        // update nav theme based on nav color
        const newNavTheme = (brightness > 125) ? 'light' : 'dark';
        setNavTheme(newNavTheme)
    }, [color])

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <Navbar
            fixed="top"
            expand="sm"
            variant={navTheme}
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
                <Navbar.Collapse id="navLinks">
                    <Nav handleColorChange={handleColorChange} />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}



export default Header
