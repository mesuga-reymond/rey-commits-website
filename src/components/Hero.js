import React from 'react'
import {Jumbotron, Container} from "react-bootstrap"
function Hero() {
    return (
        <div>
            <Jumbotron fluid className="hero">
                <Container className="hero-container">
                    <h1>Data Analysis & Artificial Intelligence Collections</h1>
                    <h4>by Reymond Mesuga</h4>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of its
                        parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Hero
