/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Jumbotron, Image} from "react-bootstrap"
import ContactButtons from '../identity_and_contacts/contactButtons';
import LibraryTitle from './heroTitles/Library_Title';


function HeroBookLibrary() {
   
    return (
        <div>
            <Jumbotron fluid className="hero-library">
            
                <div fluid className="hero-container">
                <div className="profile-div">
                <Image className="home-profile-image-large" src="reymond2.jpg" roundedCircle/>
                <Image className="home-profile-image-medium" src="reymond2.jpg" roundedCircle/>
                </div>
                    <LibraryTitle/>
                    <ContactButtons/>
                    
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeroBookLibrary
