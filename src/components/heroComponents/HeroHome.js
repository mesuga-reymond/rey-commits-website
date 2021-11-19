/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Jumbotron, Image} from 'react-bootstrap';
import ContactButtons from '../identity_and_contacts/contactButtons';
import Name from '../identity_and_contacts/name';

function HeroHome() {
    

    return (
        <div fluid>
            <Jumbotron fluid className="hero-home">
                <div className="hero-container">

                    <div className="hero-for-big-screen">
                        <div className="profile-div">
                            <Image className="home-profile-image-large" src="reymond2.jpg" roundedCircle/>
                            <Image className="home-profile-image-medium" src="reymond2.jpg" roundedCircle/>
                        </div>
                    </div>

                    <div className="large-screen-name">
                        <Name />
                    </div>

                    <div className="hero-for-small-screen">

                        <Image className="home-profile-image-small" src="reymond2.jpg" roundedCircle/>

                        <h1 className="home-hero-title home-hero hero-text">Reymond Mesuga</h1>
                    </div>

                    {/* Uncomment below to retwrieve old home hero */}
                    {/* <div className="hero-text">Welcome to</div>
                    <h1 className="home-hero-title home-hero hero-text"><Image className="home-profile-image" src="reymond2.jpg" roundedCircle/> Rey-commits</h1>
                    <h5 className="hero-text">by Reymond Mesuga</h5> */}
                    <ContactButtons />
                    
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeroHome
