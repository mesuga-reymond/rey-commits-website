import React from 'react'
import {Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function NavTab() {
    return (
        <div className="navtab-container">
            <Container fluid>
            <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link eventKey="link-1"><span className="nav-tab-link">DA & ML Projects</span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/app-projects">
                        <Nav.Link eventKey="link-2"><span className="nav-tab-link">Web Apps</span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/books">
                        <Nav.Link eventKey="link-3"><span className="nav-tab-link">Books & Notes Library</span></Nav.Link> 
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/about">
                        <Nav.Link eventKey="link-4"><span className="nav-tab-link">About</span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </Container>
        </div>
    )
}

export default NavTab
