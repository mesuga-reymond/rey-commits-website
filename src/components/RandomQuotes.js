import React from 'react'
import { Button, Card } from 'react-bootstrap';

function RandomQuotes() {
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
                    <Card className="quote-card-main">
                        <Card.Header className="quote-header">Quote Machine</Card.Header>
                        <Card.Body className="quote-card-body">
                            <blockquote className="blockquote mb-0">
                            <p className="quote-card-text">&quot;{randomQuote.text}&quot;</p>
                                <footer className="blockquote-footer">
                                <h5 className="quote-card-title">- {randomQuote.author  || "No author"}</h5>
                                </footer>
                            </blockquote>
                            <Button onClick={getNewQuote} variant="light">New Quote</Button>
                        </Card.Body>
                    </Card>
                </div>
        </div>
    )
}

export default RandomQuotes
