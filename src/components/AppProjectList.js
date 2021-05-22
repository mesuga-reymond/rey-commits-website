import React from 'react'
import {Container, Row } from 'react-bootstrap'
import {webAppData} from '../webAppData'
import IndividualVideo from './IndividualVideo'
function AppProjectList() {
    return (
        <div>
            <Container className="video-palylist-container">
                <Row md={3} sm={1} xl={3} lg={3}>
                    {webAppData.map(video => (
                        <div>
                            <IndividualVideo 
                                title={video.title}
                                thumbnail={video.thumbnail}
                                vlogger={video.vlogger}
                                topics={video.topics}
                                info={video.info}
                            />
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default AppProjectList
