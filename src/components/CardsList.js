import React from 'react'
import {Container, Row} from "react-bootstrap"
// import {LinkContainer} from 'react-router-bootstrap'
import IndividualCard from './IndividualCard'
import {studyData} from "../studyData" 

function CardsList() {

    return (
        <Container className="cardlist-container">
            <Row className="cardlist-row" md={2} sm={1} xl={3}> 
                {studyData.map(study => (
                    <div id={study.id}>
                        <IndividualCard
                            key={study.id}
                            title={study.title}
                            author={study.author}
                            info={study.info}
                            img={study.img}
                            type={study.type}
                            modalImage={study.modalImage}
                            topics={study.topics}/>
                    </div>
                ))}
            </Row>
        </Container>
    )
}

export default CardsList
