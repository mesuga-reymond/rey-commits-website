import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
function ContentTable() {
    return (
        <div>
            <Accordion className="content-table" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle className="content-toggle" as={Card.Header} eventKey="1">
                        <h4>List of Contents</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="content-table-body">
                            
                                <div className="content-item">1. Pneumonia Image Classification Using CNN</div>
                                <hr/>
                                <div className="content-item">2. Hotel Cancelation Prediction Using Simple Deep Learning Model</div>
                                <hr/>
                                <div className="content-item">3. Covid-19 Chest X-Ray Image Classification Using CNN</div>
                                <hr/>
                                <div className="content-item">4. Covid-19 Data Analysis Using Python</div>
                                <hr/>
                                <div className="content-item">5. [Ongoing] Comparison of Different Data Augmentation Techniques to Improve the Accuracy of CNN to Classify Glitches that Interupts the Gravitational Wave Detection</div>
                                <hr/>
                                <div className="content-item">6. [Ongoing] Investigation on the Effects of Image Quality Distortions on the Accuracy of CNN to Predict the Possible Existence of Covid-19 Using Chest X-ray Images</div>
                            
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default ContentTable
