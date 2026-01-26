/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Navigation() {

    // ----------------------------
    // Dark Mode State and Behavior
    // ----------------------------
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    // ----------------------------
    // Resume Button Function
    // ----------------------------
    function openTabResume() {
        // window.open("https://github.com/Rey-commits/rey-commits-website/raw/master/src/components/bodyComponents/Mesuga_Reymond_Resume.pdf");
    }

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg={darkMode ? "light" : "dark"}
            variant={darkMode ? "light" : "dark"}
            fixed="top"
        >
            <LinkContainer to="/">
                <Navbar.Brand className="navbar-brand">
                    Rey-commits
                    <span className="navbar-copyright">
                        <i className="fas fa-trademark"></i>
                    </span>
                </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navlinks">
                    {/* ----------------------------
                       Navigation Links
                    ---------------------------- */}
                    <LinkContainer to="/">
                        <Nav.Link className="navlink-item">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/AI">
                        <Nav.Link className="navlink-item">Projects</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to="/app-projects">
                        <Nav.Link className="navlink-item">Web Apps</Nav.Link> 
                    </LinkContainer> */}
                    <LinkContainer to="/books">
                        <Nav.Link className="navlink-item">Library</Nav.Link> 
                    </LinkContainer>
                    {/* <LinkContainer to="/about">
                        <Nav.Link className="navlink-item">About</Nav.Link>
                    </LinkContainer>   */}

                    {/* ----------------------------
                       Resume Button
                    ---------------------------- */}
                    <a className="app-individual-button" onClick={openTabResume}>
                        <Button variant={darkMode ? "outline-dark" : "outline-light"}>
                            Download Resume
                        </Button>
                    </a>

                    {/* ----------------------------
                       🌙 Dark Mode Toggle Button
                    ---------------------------- */}
                    <Button
                        variant={darkMode ? "dark" : "light"}
                        onClick={() => setDarkMode(!darkMode)}
                        style={{ marginLeft: "1rem" }}
                    >
                        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
