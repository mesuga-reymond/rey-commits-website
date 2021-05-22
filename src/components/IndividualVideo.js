import React from 'react'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'

function IndividualVideo({title,vlogger,topics,thumbnail,info}) {
    return (
        <Container className="individual-video-container">
            <Card className="individual-video">
                <Card.Img className="video-thumbnail" variant="top" src={thumbnail}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {info}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>by {vlogger}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Watch</Card.Link>
                    <Card.Link href="#">Info</Card.Link> 
                </Card.Body>
            </Card>
        </Container>
    )
}

export default IndividualVideo
