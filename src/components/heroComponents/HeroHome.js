/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Button, Col, Jumbotron, Image} from 'react-bootstrap';
import HeroClouds from './hero-clouds';

function HeroHome() {
    function openTabGithub() {
        window.open('https://github.com/Rey-commits');
    }
    function openTabLinkedIn() {
        window.open('https://www.linkedin.com/in/reymondmesuga-421/');
    }
    function openTabFacebook() {
        window.open('https://www.facebook.com/reymond.mesugah/');
    }

    return (
        <div fluid>
            <Jumbotron fluid className="hero-home">
            <HeroClouds />
                <div className="hero-container">
                
                    <div className="hero-for-big-screen">
                        <div className="profile-div">
                            <Image className="home-profile-image-large" src="reymond2.jpg" roundedCircle/>
                            <Image className="home-profile-image-medium" src="reymond2.jpg" roundedCircle/>
                        </div>
                        <h1 className="home-hero-title home-hero hero-text">Reymond Mesuga</h1>
                        <h5 className="hero-text">Artificial Intelligence | Physics | React Programming</h5>
                    </div>
                    
                    <div className="hero-for-small-screen">

                        <Image className="home-profile-image-small" src="reymond2.jpg" roundedCircle/>

                        <h1 className="home-hero-title home-hero hero-text">Reymond Mesuga</h1>
                    </div>

                    {/* Uncomment below to retwrieve old home hero */}
                    {/* <div className="hero-text">Welcome to</div>
                    <h1 className="home-hero-title home-hero hero-text"><Image className="home-profile-image" src="reymond2.jpg" roundedCircle/> Rey-commits</h1>
                    <h5 className="hero-text">by Reymond Mesuga</h5> */}

                    <Col className="hero-buttons-column">
                        <a onClick={openTabGithub}>
                            <Button className="individual-button" variant="dark">
                                <i class="fab fa-github-square social-icon"></i> GitHub</Button>

                        </a>
                        <a onClick={openTabLinkedIn}>
                            <Button className="individual-button" variant="dark">
                                <i class="fab fa-linkedin social-icon"></i> LinkedIn</Button>
                        </a>
                        <a onClick={openTabFacebook}>
                            <Button className="individual-button" variant="dark">
                                <i class="fab fa-facebook-square social-icon"></i> Facebook</Button>
                        </a>
                    </Col>
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeroHome
