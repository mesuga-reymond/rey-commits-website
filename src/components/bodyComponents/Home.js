/* eslint-disable array-callback-return */
import React from 'react'
import {Col, Container, Figure, Row} from 'react-bootstrap'
import AIimage from "../comp-images/AI.svg";
import webdev from "../comp-images/webdev.svg"
import ML from "../comp-images/ML.svg"
import TechsLogoList from './TechsLogoList';
// import RandomQuotes from './RandomQuotes';

function Home() {
    return (
        <div>
            <Container fluid>
                <div fluid className="home-container">
                    <h3 className="home-upper-text">Topics & Services</h3>
                    <div className="topic-collection">
                        <Row fluid className="individual-row">
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={ML}/>
                                <h3 className="home-info-title">Machine Learning</h3>
                                <p className="info-text">
                                    Machine learning is an application of artificial intelligence (AI) that provides
                                    systems the ability to automatically learn and improve from experience without
                                    being explicitly programmed. Machine learning focuses on the development of
                                    computer programs that can access data and use it to learn for themselves.
                                </p>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={AIimage}/>
                                <h3 className="home-info-title">Deep Learning</h3>
                                <p className="info-text">
                                    Machine learning is an application of artificial intelligence (AI) that provides
                                    systems the ability to automatically learn and improve from experience without
                                    being explicitly programmed. Machine learning focuses on the development of
                                    computer programs that can access data and use it to learn for themselves.
                                </p>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={webdev}/>
                                <h3 className="home-info-title">Web App Development</h3>
                                <p className="info-text">
                                    Machine learning is an application of artificial intelligence (AI) that provides
                                    systems the ability to automatically learn and improve from experience without
                                    being explicitly programmed. Machine learning focuses on the development of
                                    computer programs that can access data and use it to learn for themselves.
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
