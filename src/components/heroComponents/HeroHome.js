/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button, Col, Jumbotron } from 'react-bootstrap';

function HeroHome() {
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
        <div fluid>
            <Jumbotron fluid className="hero-home"> 
                <div className="hero-container">
                <div className="hero-text">Welcome to</div>
                    <h1 className="home-hero-title home-hero hero-text">Rey-commits</h1>
                    <p className="hero-text">This is Reymond's home for creativity and innovation</p>
                    
                    {/* <p>
                        These are the collections of projects that i have been doing on my spare time and some research contributions within academics.
                    </p> */}
                    <Col className="hero-buttons-column">
                        <a onClick={openTabGithub}>
                            <Button className="individual-button" variant="dark"><i class="fab fa-github-square social-icon"></i> GitHub</Button>
                            
                        </a>
                        <a onClick={openTabLinkedIn}>
                            <Button className="individual-button" variant="dark"><i class="fab fa-linkedin social-icon"></i> LinkedIn</Button>
                        </a>
                        <a onClick={openTabFacebook}>
                            <Button className="individual-button" variant="dark"><i class="fab fa-facebook-square social-icon"></i> Facebook</Button>
                        </a>
                    </Col>
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeroHome
