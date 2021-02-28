import React from 'react'
import Nav from './Nav'
import { Container, Navbar } from 'react-bootstrap'
import profileImg from '../assets/images/profile.jpg'
import './header.css'

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" expand="sm" variant="light" bg="transparent">
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
                        <Nav />
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}



export default Header
