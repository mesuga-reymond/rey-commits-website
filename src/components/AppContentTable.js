import React from 'react'
import {Accordion, Card, Container} from 'react-bootstrap'
import { HashLink as Link } from 'react-router-hash-link';
import {webAppData} from "../webAppData.js"

function AppContentTable() {
    return (
        <div>
             <Container>
                
                <Accordion className="content-table" defaultActiveKey="0">
                    
                    {/* <p className="instructions">Consider checking the list of content below to ease finding a project in your interest. Also, be patient while loading source code on GiHub because some of the files are large enough to load a few minutes.</p> */}
                    <Card>
                        <Accordion.Toggle className="content-toggle" as={Card.Header} eventKey="1">
                            <h5 className="content-header">List of Web Apps <span className="click-sign">(click)</span></h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="content-table-body">
                                {webAppData.map(app => (
                                    <div>
                                        <Link className="content-table-Link-tag" to={`#${app.id}`}>
                                            <div key={app.id} className="content-item">{app.id}. {app.title}</div>
                                        </Link>
                                        <hr></hr>
                                    </div>
                                ))}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    )
}

export default AppContentTable
