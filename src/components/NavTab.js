import React from 'react'
import {Button, Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap' 

function NavTab() {
    return (
        <div className="navtab-container">
            <Container fluid>
            <Nav className="justify-content-center" defaultActiveKey="/">
                <Nav.Item>
                    <LinkContainer to="">
                        <Nav.Link eventKey="1"><span className="nav-tab-link"><Button variant="outline-dark">Home</Button></span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/AI">
                        <Nav.Link eventKey="2"><span className="nav-tab-link"><Button variant="outline-dark">Projects</Button></span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                {/* <Nav.Item>
                    <LinkContainer to="/app-projects">
                        <Nav.Link eventKey="3"><span className="nav-tab-link"><Button variant="outline-dark">Web Apps</Button></span></Nav.Link>
                    </LinkContainer>
                </Nav.Item> */}
                <Nav.Item>
                    <LinkContainer to="/books">
                        <Nav.Link eventKey="4"><span className="nav-tab-link"><Button variant="outline-dark">Books & Notes Library</Button></span></Nav.Link> 
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/about">
                        <Nav.Link eventKey="5"><span className="nav-tab-link"><Button variant="outline-dark">About</Button></span></Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </Container>
        </div>
    )
}

export default NavTab
