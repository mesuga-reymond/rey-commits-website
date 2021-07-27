import React from 'react'
import {Accordion, Card, Container} from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link';
import {studyData} from "../Data/studyData"
import {studyDataForLarge} from "../Data/studyData"

function ContentTable() {
    
    return (

        <Container>
                
            <Accordion className="content-table" defaultActiveKey="0">
                
                {/* <p className="instructions">Consider checking the list of content below to ease finding a project in your interest. Also, be patient while loading source code on GiHub because some of the files are large enough to load a few minutes.</p> */}
                <Card>
                    <Accordion.Toggle className="content-toggle" as={Card.Header} eventKey="1">
                        <h5 className="content-header">List of Contents <span className="click-sign">(click)</span></h5>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="content-table-body">
                            {studyData.map(study => (
                                <div>
                                    <Link className="content-table-Link-tag" to={`#${study.id}`}>
                                        <div key={study.id} className="content-item">{study.id}. {study.title}</div>
                                    </Link>
                                    <hr></hr>
                                </div>
                            ))}
                            {studyDataForLarge.map(study => (
                                <div>
                                    <Link className="content-table-Link-tag" to={`#${study.id}`}>
                                        <div key={study.id} className="content-item">{study.id}. {study.title}</div>
                                    </Link>
                                    <hr></hr>
                                </div>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
}

export default ContentTable
