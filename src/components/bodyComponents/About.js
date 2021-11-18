/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Button, Card, Container} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'

function About() {
    function openTabResume() {
        // window.open("https://github.com/Rey-commits/rey-commits-website/raw/master/src/components/bod" +
        //         "yComponents/Mesuga_Reymond_Resume.pdf");
    }
    return (
        <div>
            <Container className="about-container">
                <h1>About Me</h1>
                <div className="line">
                    <hr></hr>
                </div>
                
                <h3>Reymond R. Mesuga</h3>
                <a className="app-individual-button" onClick={openTabResume}>
                    <Button variant="dark">Download Resume</Button>
                </a>

                <Card.Text className="about-info">
                    <p>React App Development and Artificial Intelligence Enthusiast</p>
                    <p>
                        <i>
                            I'm a programmer and a physics student at PUP Manila. I enjoy doing data
                            analysis, artificial intelligence and app development on my spare time. 
                            I use python and its frameworks as my main programming language for data 
                            analysis and artificial intelligence. When it comes to app development, 
                            i use javascript as my main languange and especially its framework called React JS.
                        </i>
                    </p>
                </Card.Text>
                <h1>About This Website</h1>
                <div className="line">
                    <hr></hr>
                </div>

                <Card.Text className="about-info">
                    <p>
                        <i>
                            I made this website back in May 2021 with my favorite javascript framework called React JS. 
                            This website aims to showcase the projects that i have been doing in the course of my learning progress. 
                            My projects in A.I. focuses on deep learning and machine learning which involve calssification and 
                            prediction using traditional and state-of-the-art algorithms. On the other hand, my web app projects 
                            are simple enough to demonstrate my skills in web development and specially on the framework React JS.
                        </i>
                    </p>
                </Card.Text>
            </Container>
        </div>
    )
}

export default About
