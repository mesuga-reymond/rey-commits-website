import React from 'react'
import {Col, Container, Image, Row} from 'react-bootstrap'
import {techsData} from "../../Data/techsData"

function TechsLogoList() {
    return (
        <Container className="techslogolist-container">
            <h3 className="techslogolist-title">Technology Stacks & Skills</h3>
            <div className="line">
                <hr></hr>
            </div>
            <Row lg={8} md={6} sm={3} xs={3}>
                {techsData.map(logo => (
                    <Col key={logo.id}>
                        <Image className="individual-logo" src={logo.image} rounded/>
                        <p className="logo-name">{logo.name}</p>
                    </Col>
                ))
}
            </Row>
        </Container>
    )
}

export default TechsLogoList
