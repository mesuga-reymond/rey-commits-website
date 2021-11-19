import {Col, Button} from "react-bootstrap";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ContactButtons() {
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
        <div className="contact-buttons-container">
            <Col>
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

    )
}

export default ContactButtons