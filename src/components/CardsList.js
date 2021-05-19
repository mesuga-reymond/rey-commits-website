import React from 'react'
import {Breadcrumb, Container, Row} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'

import IndividualCard from './IndividualCard'
import {studyData} from "../studyData"

function CardsList() {
    
    return (
        <Container className="cardlist-container">
            <Container className="breadcrumb-container">
                <Breadcrumb>

                    <LinkContainer to="/">
                        <Breadcrumb.Item active>
                            Projects
                        </Breadcrumb.Item>
                    </LinkContainer>
                </Breadcrumb>
            </Container>
            <Row className="cardlist-row" md={2} sm={1} lg={3} >
            {studyData.map(study => (<IndividualCard 
            key={study.id} 
            title={study.title} 
            author={study.author} 
            info={study.info} 
            img={study.img} 
            type={study.type}
            modalImage={study.modalImage}
            topics={study.topics}   
            />))}
            </Row>            
        </Container>
    )
}

export default CardsList
