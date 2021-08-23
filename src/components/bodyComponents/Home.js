/* eslint-disable array-callback-return */
import React from 'react'
import {Col, Container, Figure, Row} from 'react-bootstrap'
import AIimage from "../comp-images/AI_green.svg";
import webdev from "../comp-images/webdev_green.svg"
import ML from "../comp-images/ML_green.svg"
import TechsLogoList from './TechsLogoList';
import AIimage_black from "../comp-images/AI_black.svg";
import webdev_black from "../comp-images/webdev_black.svg"
import ML_black from "../comp-images/ML_black.svg"
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
                                <Figure.Image className="home-image-black" alt="171x180" src={ML_black}/>
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
                                <Figure.Image className="home-image-black" alt="171x180" src={AIimage_black}/>
                                <h3 className="home-info-title">Artificial Intelligence</h3>
                                <p className="info-text">
                                Artificial intelligence (AI) refers to the simulation of human intelligence 
                                in machines that are programmed to think like humans and mimic their actions. 
                                The term may also be applied to any machine that exhibits traits associated 
                                with a human mind such as learning and problem-solving. The Artificial Intelligence 
                                involve in my projects uses machine learning and deep learning using Python libraries 
                                such as TensorFlow, PyTorch and Scikit-Learn.  
                                </p>
                            </Col>
                            <Col fluid lg={4} md={4} sm={12} className="home-individual-info">
                                <Figure.Image className="home-image" alt="171x180" src={webdev}/>
                                <Figure.Image className="home-image-black" alt="171x180" src={webdev_black}/>
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
