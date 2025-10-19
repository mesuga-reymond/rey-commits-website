/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React from 'react'
import {Col, Container, Figure, Row} from 'react-bootstrap'
// import AIimage from "../comp-images/AI_green.svg";
// import webdev from "../comp-images/webdev_green.svg"
// import ML from "../comp-images/ML_green.svg"
import AIimage from "../comp-images/DE_classic.jpg";
import webdev from "../comp-images/DA_classic.jpg"
import ML from "../comp-images/AI_classic.jpg"
import TechsLogoList from './TechsLogoList';
import AIimage_violet from "../comp-images/AI_violet.svg";
import webdev_violet from "../comp-images/webdev_violet.svg"
import ML_violet from "../comp-images/ML_violet.svg"
// import RandomQuotes from './RandomQuotes';

import CodersRankActivity from '@codersrank/activity';
import CodersRankSkillsChart from '@codersrank/skills-chart';
import AlertPop from './AlertPop';
if (!window.customElements.get('codersrank-activity')) {
    window.customElements.define('codersrank-activity', CodersRankActivity);
}

if (!window.customElements.get('codersrank-skills-chart')) {
    window.customElements.define('codersrank-skills-chart', CodersRankSkillsChart);
}

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
                        <h3 className="home-upper-text home-hero">GitHub Daily Activities</h3>
                        <div className="line">
                            <hr></hr>
                        </div>
                        <codersrank-activity
                            labels="true"
                            tooltip="true"
                            branding="false"
                            step="5"
                            username="mesuga-reymond"></codersrank-activity>
                    </div> */}
                    {/* <div className="codersrank-skills-chart-div">
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

                    {/* <h3 className="home-upper-text home-deck-title">Service Deck</h3> */}
                    {/* <div className="line">
                        <hr></hr>
                    </div> */}
                    <div className="topic-collection">
                        {/* <Row fluid className="individual-row">
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={ML}/>
                                <Figure.Image className="home-image-black" alt="171x180" src={ML_violet}/>
                                <div className="line">
                                    <hr></hr>
                                </div>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={AIimage}/>
                                <Figure.Image className="home-image-black" alt="171x180" src={AIimage_violet}/>
                                <div className="line">
                                    <hr></hr>
                                </div>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={webdev}/>
                                <Figure.Image className="home-image-black" alt="171x180" src={webdev_violet}/>
                                <div className="line">
                                    <hr></hr>
                                </div>
                            </Col>
                        </Row> */}
                        <TechsLogoList/>

                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Home
