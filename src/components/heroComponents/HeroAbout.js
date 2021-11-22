/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Image, Jumbotron } from 'react-bootstrap';
import ContactButtons from '../identity_and_contacts/contactButtons';
import AboutTitle from './heroTitles/About_Title';


function HeroAbout() {
    
    return (
        <div>
            <Jumbotron fluid className="hero-about">
            
                <div fluid className="hero-container">
                <div className="profile-div">
                <Image className="home-profile-image-large" src="reymond2.jpg" roundedCircle/>
                <Image className="home-profile-image-medium" src="reymond2.jpg" roundedCircle/>
                </div>
                    <div className="about-hero-head">
                    <div className="large-screen-name">
                    <AboutTitle/>
                    </div>
                    <div className="small-screen-name">
                    <AboutTitle/>
                    </div> 
                    
                    <ContactButtons/>
                    </div>
                    
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeroAbout
