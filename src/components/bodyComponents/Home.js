/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React from 'react'
import {Col, Container, Figure, Row} from 'react-bootstrap'
import AIimage from "../comp-images/AI_green.svg";
import webdev from "../comp-images/webdev_green.svg"
import ML from "../comp-images/ML_green.svg"
import TechsLogoList from './TechsLogoList';
import AIimage_violet from "../comp-images/AI_violet.svg";
import webdev_violet from "../comp-images/webdev_violet.svg"
import ML_violet from "../comp-images/ML_violet.svg"
// import RandomQuotes from './RandomQuotes';

import CodersRankActivity from '@codersrank/activity';
import CodersRankSkillsChart from '@codersrank/skills-chart';
import AlertPop from './AlertPop';
window
    .customElements
    .define('codersrank-activity', CodersRankActivity);

// register web component as <codersrank-skills-chart> element
window
    .customElements
    .define('codersrank-skills-chart', CodersRankSkillsChart);

function Home() {
    return (
        <div>
            <Container fluid>
                <div fluid className="home-container">
                {/* <div className="codersrank-activity-div">
                        <h3 className="home-upper-text">CodersRank Standing</h3>
                        <div className="line">
                            <hr></hr>
                        </div>
                        <codersrank-summary branding="false" username="mesuga-reymond"></codersrank-summary>
                    </div> */}
                

                    {/* <div className="codersrank-activity-div">
                        <h3 className="home-upper-text">GitHub Daily Activities</h3>
                        <div className="line">
                            <hr></hr>
                        </div>
                        <codersrank-activity
                            labels="true"
                            tooltip="true"
                            branding="false"
                            step="5"
                            username="mesuga-reymond"></codersrank-activity>
                    </div>
                    <div className="codersrank-skills-chart-div">
                        <h3 className="home-upper-text">Programming Language Graph</h3>
                        <div className="line">
                            <hr></hr>
                        </div>
                        <codersrank-skills-chart
                            labels="true"
                            tooltip="true"
                            branding="false"
                            show-other-skills="true"
                            svg-height="150"
                            max-labels="5"
                            legend="true"
                            skills="C, CSS,CoffeeScript, HTML, JSON, JavaScript, Jupyter Notebook, SCSS, TypeScript, Other"
                            username="mesuga-reymond"></codersrank-skills-chart>
                    </div> */}
                    <h3 className="home-upper-text">Domain Services</h3>
                    <div className="line">
                        <hr></hr>
                    </div>
                    <div className="topic-collection">
                        <Row fluid className="individual-row">
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={ML}/>
                                <Figure.Image className="home-image-black" alt="171x180" src={ML_violet}/>
                                <h3 className="home-info-title">Physics & Engineering</h3>
                                <div className="line">
                                    <hr></hr>
                                </div>
                                <p className="info-text">
                                I am a senior Physics student at PUP Manila with a strong background in physics and engineering principles. I have conducted research in areas such as thermodynamics, electromagnetism, electronics, and the application of artificial intelligence, particularly in medical imaging and astrophysics.
                                </p>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={AIimage}/>
                                <Figure.Image className="home-image-black" alt="171x180" src={AIimage_violet}/>
                                <h3 className="home-info-title">Artificial Intelligence</h3>
                                <div className="line">
                                    <hr></hr>
                                </div>
                                <p className="info-text">
                                I previously interned at the Philippine Space Agency (PhilSA), focusing on artificial intelligence and its applications in earth observation. In addition to my physics studies, I have worked on numerous projects involving deep learning, particularly in radiography, astrophysics, particle physics (specifically electron mass detection), and predicting exoplanets and pulsar stars.
                                </p>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={webdev}/>
                                <Figure.Image className="home-image-black" alt="171x180" src={webdev_violet}/>
                                <h3 className="home-info-title">Web App Development</h3>
                                <div className="line">
                                    <hr></hr>
                                </div>
                                <p className="info-text">
                                This personal website is my largest web application project to date, which I started in 2021 and have continued to develop in my free time as a college student. I aim to keep enhancing its performance and interface. For this project, I have primarily used JavaScript, particularly the React JS framework, along with CSS frameworks like React-Bootstrap.
                                </p>
                            </Col>
                        </Row>
                        <TechsLogoList/>

                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Home
