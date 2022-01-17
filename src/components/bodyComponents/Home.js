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
                <div className="codersrank-activity-div">
                        <h3 className="home-upper-text">CodersRank Standing</h3>
                        <div className="line">
                            <hr></hr>
                        </div>
                        <codersrank-summary branding="false" username="mesuga-reymond"></codersrank-summary>
                    </div>
                

                    <div className="codersrank-activity-div">
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
                    </div>
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
                                    I am a Senior Physics student from PUP Manila 
                                    who already has a solid foundation in physics and other engineering principles. 
                                    I already conducted a research related to thermodynamics, electromagnetism, electronics, 
                                    and application of artificial intelligence specifically in the field of medical imaging and astrophysics.
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
                                    I am a former Artificial Intelligence (AI) Intern at Philippine Space Agency (PhilSA) 
                                    where i did work in projects related to the application of AI in earth observation. 
                                    I also have plenty of projects related to the application deep learning in the 
                                    field of radiography, cancer research, astrophysics, particle physics especifically 
                                    on electron mass detection, astrophysics especialy exo-planet and pulsar star prediction and more.
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
                                    This personal website is my biggest proejct so far. 
                                    I have been using JavaScript as my programming language especially its framework 
                                    called React JS and other CSS frameworks like React-Bootsrap. I have been developing this web application for several months now
                                    and will continue to improve it's performance and interface.
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
