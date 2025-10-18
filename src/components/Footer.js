/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Jumbotron, Container, Col } from "react-bootstrap"

function Footer() {
    function openTabGithub() {
        window.open('https://github.com/Rey-commits');
    }

    function openTabLinkedIn() {
        window.open('https://www.linkedin.com/in/reymondmesuga-421/');
    }

    function openTabFacebook() {
        window.open('https://www.facebook.com/reymond.mesugah/');
    }
    return ( <
        div >
        <
        Jumbotron fluid className = "hero-footer" >
        <
        Container className = "hero-container-footer" >
        <
        p > Connect with me via: < /p> <
        Col className = "hero-buttons-column" >
        <
        a onClick = { openTabGithub }
        className = "footer-social-links" >

        <
        i class = "fab fa-github-square social-icon" > < /i> GitHub <
        /a> <
        a onClick = { openTabLinkedIn }
        className = "footer-social-links" >

        <
        i class = "fab fa-linkedin social-icon" > < /i> LinkedIn <
        /a> <
        a onClick = { openTabFacebook }
        className = "footer-social-links" >

        <
        i class = "fab fa-facebook-square social-icon" > < /i> Facebook <
        /a> <
        /Col> <
        p className = "copy-right" > Copyright < i class = "far fa-copyright" > < /i> 2021-present, Reymond Mesuga. All Rights Reserved.</p >
        <
        /Container> <
        /Jumbotron> <
        /div>
    )
}

export default Footer