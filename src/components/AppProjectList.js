import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {webAppData} from '../webAppData'
import IndividualProject from './IndividualProject'
function AppProjectList() {
    return (

        <Container fluid className="app-list-container">
            <div className="app-list-div">
                <Row className="applist-row" md={2} sm={1} xl={3}>
                    {webAppData.map(video => (
                        <div>
                            <IndividualProject
                                title={video.title}
                                thumbnail={video.thumbnail}
                                vlogger={video.vlogger}
                                topics={video.topics}
                                info={video.info}/>
                        </div>
                    ))}
                </Row>
            </div>
        </Container>

    )
}

export default AppProjectList
