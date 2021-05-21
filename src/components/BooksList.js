import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {booksData} from "../booksData"
import IndividualBook from './IndividualBook'
function BooksList() {
    return (
        <Container className="booklist-container">
        <Row md={1} sm={1} xl={2}>
            {booksData.map(book => (
                <IndividualBook 
                key={book.id}
                title={book.title}
                author={book.author}
                img={book.img}
                info={book.info}
                topics={book.topics}
                category={book.category}
                source = {book.source}    
                />
            ))}
        </Row>
            
        </Container>
    )
}

export default BooksList
