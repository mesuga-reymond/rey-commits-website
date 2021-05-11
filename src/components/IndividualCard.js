import React from 'react'
import {Card, Button} from "react-bootstrap"

function IndividualCard({title,info,img,author}) {
    return (
        <div className="individual-card">
            <Card md={3} style={{
                width: '100%'
            }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p><i>by {author}</i></p>
                    <Card.Text>
                        {info}
                    </Card.Text>
                    <Button variant="dark">GitHub</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default IndividualCard
