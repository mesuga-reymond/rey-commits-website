/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Jumbotron, Image} from "react-bootstrap"
import ContactButtons from '../identity_and_contacts/contactButtons';
import WebAppTitle from './heroTitles/WebApp_Title';


function HeroAppList() {
    return (
        <div>
            <Jumbotron fluid className="hero-app">
                <div className="hero-container">
                <div className="profile-div">
                <Image className="home-profile-image-large" src="reymond2.jpg" roundedCircle/>
                <Image className="home-profile-image-medium" src="reymond2.jpg" roundedCircle/>
                </div>
                <div className="large-screen-name">
                <WebAppTitle/>
                </div>
                <div className="small-screen-name">
                <WebAppTitle/>
                </div>
                    
                    <ContactButtons />
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeroAppList