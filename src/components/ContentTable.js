import React from 'react'
import {Accordion, Button, Card} from 'react-bootstrap'
import {studyData} from "../studyData"

function ContentTable() {
    const [quotes,
        setQuotes] = React.useState([]);
    const [randomQuote,
        setRandomQuote] = React.useState("")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randIndex])
    }
    return (

        <div>
                <div className="quote-card">
                    <Card>
                        <Card.Header className="quote-header">Quotes</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                            <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                                <footer className="blockquote-footer">
                                <h5 className="card-title">- {randomQuote.author  || "No author"}</h5>
                                </footer>
                            </blockquote>
                            <Button onClick={getNewQuote} variant="outline-secondary">New Quote</Button>
                        {/* <a href="" className="btn btn-warning" ></a>
                        <a href=""></a> */}
                        </Card.Body>
                    </Card>
                </div>
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
