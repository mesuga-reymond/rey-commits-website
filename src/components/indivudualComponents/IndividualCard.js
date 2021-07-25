import React, {useState} from 'react'
import {Card, Button, Modal, Jumbotron, Container} from "react-bootstrap"

function IndividualCard({title, info, img, author, type, modalImage, topics}) {
    const [lgShow,
        setLgShow] = useState(false);
    // const BackgroundImageModal = {
    //     backgroundImage: img
    // }
    return (
        <div className="individual-card"> 
            <Card md={3} style={{
                width: '100%'
            }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>
                        <i>by {author}</i>
                    </p>
                    <Card.Text>
                        {info}
                    </Card.Text>
                    <Button onClick={() => setLgShow(true)} variant="dark">Read more</Button>
                    <Modal
                        className="card-study-modal"
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
                                <Container style={{backgroundImage: `url(${modalImage})`}}>
                                    <div className="modal-jumbotron">
                                    <h4>{title}</h4>
                                    <div><i>by {author}</i></div>
                                    </div>
                                    <hr></hr>
                                </Container>
                            </Jumbotron>
                            <p>{info}</p>
                        </Modal.Body>
                        <div className="modal-footer">Topics: {topics}</div>
                    </Modal>
                </Card.Body>
            </Card>
        </div>
    )
}

export default IndividualCard
