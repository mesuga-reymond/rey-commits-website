/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Button, Card, Container} from 'react-bootstrap'

function IndividualVideo({title, vlogger, thumbnail, info, source, code}) {
    function openTabSource() {
        window.open(source);
    }
    function openTabCode() {
        window.open(code);
    }
    return (
        <Container fluid className="individual-app-container">
            <div className="individual-app-div">
                <Card
                    className="individual-app"
                    md={3}
                    style={{
                    width: '100%'
                }}>
                    <Card.Img variant="top" src={thumbnail}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title> 
                        <p>
                            {/* <i>by {vlogger}</i> */}
                        </p>
                        <Card.Text>
                            {info}
                        </Card.Text>
                        <a className="app-individual-button" onClick={openTabSource}>
                            <Button variant="secondary">Link</Button>
                        </a>
                        <a className="app-individual-button" onClick={openTabCode}>
                            <Button variant="secondary">Code</Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

        </Container>
    )
}

export default IndividualVideo
