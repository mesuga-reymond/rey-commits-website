/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Jumbotron, Container, Button, Col} from "react-bootstrap"
function Hero() {
    function openTabGithub() {
            window.open('https://github.com/Rey-commits');
        }
        function openTabLinkedIn() {
            window.open('https://github.com/Rey-commits');
        }
        function openTabFacebook() {
            window.open('https://github.com/Rey-commits');
        }
    return ( 
        <div>
            <Jumbotron fluid className="hero">
                <Container className="hero-container">
                    <h1>Data Analysis & Artificial Intelligence Projects</h1>
                    <h4>by Reymond Mesuga</h4>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of its
                        parent.
                    </p>
                    <Col>
                        <a className="individual-button" onClick={openTabGithub}><Button variant="outline-light">Github</Button></a>
                        <a className="individual-button" onClick={openTabLinkedIn}><Button variant="outline-light">LinkedIn</Button></a>
                        <a className="individual-button" onClick={openTabFacebook}><Button variant="outline-light">Facebook</Button></a>                  
                    </Col>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Hero
