/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function Navigation() {
    function openTabResume() {
        // window.open("https://github.com/Rey-commits/rey-commits-website/raw/master/src/components/bodyComponents/Mesuga_Reymond_Resume.pdf");
    }
    return (
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <LinkContainer to="/">
                    <Navbar.Brand className="navbar-brand">
                    Rey-commits
                    <span className="navbar-copyright"><i class="fas fa-trademark"></i></span>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navlinks">
                        <LinkContainer to="/">
                            <Nav.Link className="navlink-item">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/AI">
                            <Nav.Link className="navlink-item">A.I. Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/app-projects">
                            <Nav.Link className="navlink-item">Web Apps</Nav.Link> 
                        </LinkContainer>
                        <LinkContainer to="/books">
                            <Nav.Link className="navlink-item">Library</Nav.Link> 
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link className="navlink-item">About</Nav.Link>
                        </LinkContainer>  
                        <a className="app-individual-button" onClick={openTabResume}>
                        <Button variant="outline-light">Download Resume</Button>
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       
    )
}

export default Navigation
