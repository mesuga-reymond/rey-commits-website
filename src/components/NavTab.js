import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom' // ✅ detect current route

function NavTab() {
    const location = useLocation(); // ✅ get the current path
    const currentPath = location.pathname;

    return (
        <Container fluid className="navtab-container">
            <Nav className="justify-content-center" activeKey={currentPath}>
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link eventKey="/">
                            <span className="nav-tab-link">
                                <Button variant={currentPath === '/' ? 'dark' : 'outline-dark'}>
                                    Home
                                </Button>
                            </span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                <Nav.Item>
                    <LinkContainer to="/AI">
                        <Nav.Link eventKey="/AI">
                            <span className="nav-tab-link">
                                <Button variant={currentPath === '/AI' ? 'dark' : 'outline-dark'}>
                                    Projects
                                </Button>
                            </span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                {/* <Nav.Item>
                    <LinkContainer to="/app-projects">
                        <Nav.Link eventKey="/app-projects">
                            <span className="nav-tab-link">
                                <Button variant={currentPath === '/app-projects' ? 'dark' : 'outline-dark'}>
                                    Web Apps
                                </Button>
                            </span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item> */}

                <Nav.Item>
                    <LinkContainer to="/books">
                        <Nav.Link eventKey="/books">
                            <span className="nav-tab-link">
                                <Button variant={currentPath === '/books' ? 'dark' : 'outline-dark'}>
                                    Books & Notes Library
                                </Button>
                            </span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>

                {/* <Nav.Item>
                    <LinkContainer to="/about">
                        <Nav.Link eventKey="/about">
                            <span className="nav-tab-link">
                                <Button variant={currentPath === '/about' ? 'dark' : 'outline-dark'}>
                                    About
                                </Button>
                            </span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item> */}
            </Nav>
        </Container>
    )
}

export default NavTab
