import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {booksData} from "../../Data/booksData"
import IndividualBook from '../indivudualComponents/IndividualBook'
function BooksList() {
    return (
        <Container className="booklist-container">
            <p className="booklist-intro">
                This is the list of books and notes that help me to step forward to where i am
                right now. These books and notes came from a wide variety of topics from Deep
                Learning, Machine Learning, Data Analysis, App Development, Physics and S&T in
                general.
            </p>
            <hr className="booklist-underline"></hr> 
            <Row lg={2} md={1} sm={1} xl={2}>
                {booksData.map(book => (
                    <IndividualBook
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    img={book.img}
                    info={book.info}
                    topics={book.topics}
                    category={book.category}
                    source={book.source}/>))}
            </Row>

        </Container>
    )
}

export default BooksList
