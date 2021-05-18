import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import {studyData} from "../studyData"

function ContentTable() {
    
    return (

        <div>
                
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
                                    <div className="content-item">{study.id}. {study.title}</div>
                                    <hr></hr>
                                </div>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default ContentTable
