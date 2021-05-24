/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
    Badge,
    Button,
    Col,
    Container,
    Media,
    Row
} from 'react-bootstrap'

function IndividualBook({
    img,
    title,
    info,
    source,
    author,
    topics,
    category
}) {
    function openTab() {
        window.open(source);
    }
    return (
        <div>

            <Container fluid className="media-books">
            {/* <hr/> */}
                <Row >
                    <Col xs={12} md={4} lg={4}>
                        <div>
                            <img
                                width={120}
                                height={170}
                                className="mr-0"
                                src={img}
                                alt="Generic placeholder"/>
                            <div className="book-button">
                                <a onClick={openTab}>
                                    <Button variant="secondary">Source</Button>
                                </a>
                            </div>
                            <Badge pill variant="secondary">{category}</Badge>
                        </div>

                    </Col>
                    <Col xs="auto" md={8} lg={8}>
                        <Media.Body>
                            <h5>{title}</h5>
                            <p>
                                <i>by {author}</i>
                            </p>
                            <p>{info}</p>
                        </Media.Body>
                    </Col>
                </Row>
                <div className="book-under-line">
                    <hr/>
                </div>
            </Container>
        </div>
    )
}

export default IndividualBook
