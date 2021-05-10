import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="navbar-brand" href="#home">Rey-commits</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navlinks">
                        <Nav.Link href="#features">Projects</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>                      
                        <Nav.Link href="#deets">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
