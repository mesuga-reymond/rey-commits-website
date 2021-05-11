import React from 'react'
import {Container, Row} from "react-bootstrap"
import IndividualCard from './IndividualCard'
import {studyData} from "../studyData"

function CardsList() {
    
    return (
        <Container className="cardlist-container">
            <Row className="cardlist-row" md={2} sm={1} lg={3} >
            {studyData.map(study => (<IndividualCard title={study.title} info={study.info} img={study.img}/>))}
            </Row>            
        </Container>
    )
}

export default CardsList
