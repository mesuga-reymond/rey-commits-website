import React from 'react'
import {Container, Row} from "react-bootstrap"
// import {LinkContainer} from 'react-router-bootstrap'
import IndividualCard from '../indivudualComponents/IndividualCard'
import {studyData} from "../../Data/studyData"
import {studyDataForLarge} from "../../Data/studyData"
import {studyData1} from "../../Data/studyData"
import ContentTable from '../ContentTable'

function CardsList() {

    return (
        <div>
            <iframe className='bg-music' title="music"  width="560" height="315" src="https://www.youtuberepeater.com/watch?v=9cNQFB0TDfY#gsc.tab=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                                code={study.code}
                                button_name={study.button_name}    
                                />
                        </div>
                    ))}
                </Row>
                <Row className="cardlist-row" md={1} sm={1} xl={2}>
                    {studyDataForLarge.map(study => (
                        <div id={study.id}>
                            <IndividualCard
                                key={study.id}
                                title={study.title}
                                author={study.author}
                                corresponding_author={study.corresponding_author}
                                info={study.info}
                                img={study.img}
                                type={study.type}
                                modalImage={study.modalImage}
                                code={study.code}
                                button_name={study.button_name}    
                                />
                        </div>
                    ))}
                </Row>
                <Row className="cardlist-row" md={2} sm={1} xl={3}> 
                    {studyData1.map(study => (
                        <div id={study.id}>
                            <IndividualCard
                                key={study.id}
                                title={study.title}
                                author={study.author}
                                info={study.info}
                                img={study.img}
                                type={study.type}
                                modalImage={study.modalImage} 
                                code={study.code}
                                button_name={study.button_name}
                                />
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default CardsList
