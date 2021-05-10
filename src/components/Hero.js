import React from 'react'
import {Jumbotron, Container, Button, Col} from "react-bootstrap"
function Hero() {
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
                        <a className="individual-button" href="https://github.com/Rey-commits"><Button variant="outline-light">Github</Button></a>
                        <a className="individual-button" href="https://www.linkedin.com/in/reymondmesuga-421/"><Button variant="outline-light">LinkedIn</Button></a>
                        <a className="individual-button" href="https://www.facebook.com/reymond.mesugah/"><Button variant="outline-light">Facebook</Button></a>                  
                    </Col>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Hero
