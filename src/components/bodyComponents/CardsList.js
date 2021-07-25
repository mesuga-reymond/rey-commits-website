import React from 'react'
import {Container, Row} from "react-bootstrap"
// import {LinkContainer} from 'react-router-bootstrap'
import IndividualCard from '../indivudualComponents/IndividualCard'
import {studyData} from "../../Data/studyData"
import ContentTable from '../ContentTable'

function CardsList() {

    return (
        <div>
            <ContentTable/>
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
        </div>
    )
}

export default CardsList
