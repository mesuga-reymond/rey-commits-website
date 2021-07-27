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
                                <h3 className="home-info-title">Data Analysis</h3>
                                <p className="info-text">
                                Data analysis is a process of inspecting, cleansing, transforming, and modeling 
                                data with the goal of discovering useful information, informing conclusions, and 
                                supporting decision-making. The data analysis tools that i often use are Python 
                                modules such as numpy, pandas, matplotlib, seaborn and SQL. For scientific computations, 
                                i also use Octave, Scilab and MatLab.
                                </p>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={AIimage}/>
                                <h3 className="home-info-title">Computer Vision</h3>
                                <p className="info-text">
                                Computer vision is a field of artificial intelligence (AI) that enables computers 
                                and systems to derive meaningful information from digital images, videos and other 
                                visual inputs. Most of my projects in computer vision are focusing on detecting or 
                                predicting diseases in medical images. I mainly use TensorFlow, Keras, and
                                PyTorch for most of my projects.
                                </p>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={webdev}/>
                                <h3 className="home-info-title">Web App Development</h3>
                                <p className="info-text">
                                Web development is the building and maintenance of websites; it’s the work that 
                                happens behind the scenes to make a website look great, work fast and perform well 
                                with a seamless user experience. I mainly focus on the front-end development where 
                                i use React JS as my JavaScript framework and other CSS frameworks such as React-Bootstrap.
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
