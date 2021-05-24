/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button, Col, Container, Jumbotron } from 'react-bootstrap';


function HeroAbout() {
    function openTabGithub() {
        window.open('https://github.com/Rey-commits');
    }
    function openTabLinkedIn() {
        window.open('https://www.linkedin.com/in/reymondmesuga-421/'); 
    }
    function openTabFacebook() {
        window.open('https://www.facebook.com/reymond.mesugah/');
    }
    return (
        <div>
            <Jumbotron fluid className="hero">
                <Container fluid className="hero-container">
                    <h1>About me & this website</h1>
                    <h5>by Reymond Mesuga</h5>
                    <p>
                        These are the collections of projects that i have been doing on my spare time and some research contributions within academics.
                    </p>
                    <Col className="hero-buttons-column">
                        <a onClick={openTabGithub}>
                            <Button className="individual-button" variant="outline-light"><i class="fab fa-github-square social-icon"></i> GitHub</Button>
                        </a>
                        <a onClick={openTabLinkedIn}>
                            <Button className="individual-button" variant="outline-light"><i class="fab fa-linkedin social-icon"></i> LinkedIn</Button>
                        </a>
                        <a onClick={openTabFacebook}>
                            <Button className="individual-button" variant="outline-light"><i class="fab fa-facebook-square social-icon"></i> Facebook</Button>
                        </a>
                    </Col>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HeroAbout
