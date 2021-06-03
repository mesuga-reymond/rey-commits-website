/* eslint-disable array-callback-return */
import React from 'react'
import {Col, Container, Figure, Row} from 'react-bootstrap'
import AIimage from "./comp-images/AI.svg";
import webdev from "./comp-images/webdev.svg"
import ML from "./comp-images/ML.svg"
import TechsLogoList from './TechsLogoList';

function Home() {
    return (
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

                {/* <hr></hr>
            <Row fluid>
                <Col fluid lg={6} md={6} sm={12} >
                    <Figure.Image width={400} height={400} alt="171x180" src={webdev}/>
                </Col>
                <Col fluid lg={6} md={6} sm={12} className="home-individual-info" >
                    <h3>Web Application Development</h3>
                    <p className="info-text">
                    Machine learning is an application of artificial intelligence (AI) that provides systems the ability
                    to automatically learn and improve from experience without being explicitly programmed.
                    Machine learning focuses on the development of computer programs that can access data and use it to
                    learn for themselves.
                    </p>
                </Col>
            </Row> */}
                {/* <Card className="individual-home-card bg-dark text-white">
                <Card.Img src= "https://www.refinitiv.com/content/dam/marketing/en_us/image/photography/stock/hero/adobestock_335969458.jpg.transform/hero-m/q82/image.jpg" alt="Card image"/>
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
                <Card className="individual-home-card bg-dark text-white">
                    <Card.Img
                        src="https://pressupinc.com/wp-content/uploads/2015/12/blur-codes-coding-577585-e1562351139211-760x290.jpg"
                        alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card> */}
            </div>
        </Container>
    )
}

export default Home
