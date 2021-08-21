/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Jumbotron, Button, Col} from "react-bootstrap"


function HeroAppList() {
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
            <Jumbotron fluid className="hero-app"> 
                <div className="hero-container">
                    <h1 className="hero-text">Web App Development</h1>
                    <h1 className="hero-text">Projects</h1>
                    <h5 className="hero-text">by Reymond Mesuga</h5>
                   
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

export default HeroAppList