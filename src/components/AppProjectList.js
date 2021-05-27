import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {webAppData} from '../webAppData'
import AppContentTable from './AppContentTable'
import IndividualProject from './IndividualProject'
import RandomQuotes from './RandomQuotes'
function AppProjectList() {
    return (
        <div>
        <RandomQuotes />
            <Container>
                <AppContentTable />
                <div fluid className="app-list-container">
                <div className="app-list-div">
                    <Row className="applist-row" md={2} sm={1} xl={3}>
                        {webAppData.map(app => (
                            <div id={app.id} >
                                <IndividualProject
                                    id={app.id}
                                    title={app.title}
                                    thumbnail={app.thumbnail}
                                    vlogger={app.vlogger}
                                    topics={app.topics}
                                    info={app.info}
                                    source={app.source}
                                    code={app.code}
                                    />
                            </div>
                        ))}
                    </Row>
                </div>
            </div>
            </Container>
        </div>

    )
}

export default AppProjectList
