/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button, Col, Image, Jumbotron } from 'react-bootstrap';


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
            <Jumbotron fluid className="hero-about">
                <div fluid className="hero-container">
                <div className="profile-div">
                <Image className="home-profile-image-large" src="reymond2.jpg" roundedCircle/>
                <Image className="home-profile-image-medium" src="reymond2.jpg" roundedCircle/>
                </div>
                    <div className="about-hero-head">
                    <h1 className="hero-text">About Me</h1>
                    <h1 className="hero-text">&</h1>
                    <h1 className="hero-text">This Website</h1>
                   
                    </div>
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

export default HeroAbout
