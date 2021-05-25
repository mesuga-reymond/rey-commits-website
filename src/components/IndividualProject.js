import React from 'react'
import {
    Card, Container
   
} from 'react-bootstrap'

function IndividualVideo({title, vlogger, thumbnail, info}) {
    return (
        <Container fluid className="individual-app-container">
            <div className="individual-app-div">
                <Card className="individual-app" md={3} style={{
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
                        {/* <Button onClick={() => setLgShow(true)} variant="dark">Read more</Button> */}
                        {/* <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg">
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    {type}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Jumbotron fluid>
                                    <Container
                                        style={{
                                        backgroundImage: `url(${modalImage})`
                                    }}>
                                        <div className="modal-jumbotron">
                                            <h2>{title}</h2>
                                            <div>
                                                <i>by {author}</i>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </Container>
                                </Jumbotron>
                                <p>{info}</p>
                            </Modal.Body>
                            <div className="modal-footer">Topics: {topics}</div>
                        </Modal> */}
                    </Card.Body>
                </Card>
            </div>
            {/* <Card style={{
                width: '100%'
            }}>
                <Card.Img variant="top" src={thumbnail}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {info}
                    </Card.Text>
                    <Button className="individual-app-button" variant="secondary">GitHub</Button>
                    <Button className="individual-app-button" variant="secondary">Info</Button>
                </Card.Body>
            </Card> */}
            {/* <Card className="individual-video">
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
            </Card> */}
        </Container>
    )
}

export default IndividualVideo
