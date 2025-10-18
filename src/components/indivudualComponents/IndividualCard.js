/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card, Button} from "react-bootstrap"

function IndividualCard({title, info, img, author, code, corresponding_author, button_name}) {
    function openTabCode() {
        window.open(code);
    }
    return (
        <div className="individual-card"> 
            <Card className="the-card" md={3} style={{
                width: '100%'
            }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>
                        <i>by {author}</i><br/>
                        <i>{corresponding_author}</i>
                        
                    </p>
                    <Card.Text>
                        {info}
                    </Card.Text>
                    <a className="app-individual-button" onClick={openTabCode}>
                        <Button variant="dark">{button_name}</Button>
                    </a>
                </Card.Body> 
            </Card>
        </div>
    )
}

export default IndividualCard
