/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Jumbotron, Image} from "react-bootstrap"
import ContactButtons from '../identity_and_contacts/contactButtons';
import AITitle from './heroTitles/AI_Title';
function HeroAI() {

    return (
        <div>
            <Jumbotron fluid className="hero-AI">
                <div className="hero-container">
                    <div className="profile-div">
                        <Image className="home-profile-image-large" src="reymond2.jpg" roundedCircle/>
                        <Image className="home-profile-image-medium" src="reymond2.jpg" roundedCircle/>
                    </div>
                    <div className="large-screen-name"> 
                    <AITitle/>
                    </div>
                    <div className="small-screen-name"> 
                    <AITitle/>
                    </div>

                    
                    <ContactButtons/>
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeroAI
