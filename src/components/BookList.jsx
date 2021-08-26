import React from 'react'
import SingleBook from './SingleBook'
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap'

class BookList extends React.Component{
    state={
        searchQuery:''
    }

    render(){

        return(
           <Container>
               <Row>
                    <Col>
                    <InputGroup className="mb-5 mt-5">
                        <FormControl
                        placeholder="select a title"
                        value={this.state.searchQuery}
                        onChange={e=>this.setState({searchQuery:e.target.value})}
                        />
                    </InputGroup>
                    </Col>
               </Row>

               <Row>
                    { 
                    this.props.books.filter(book=>book.title.toLowerCase().includes(this.state.searchQuery)).map(book=>(         
                        <Col xs={12} md={6} lg={4} className="mt-3 d-flex flex-end">
                            <SingleBook book={book} />
                        </Col>
                        )
                    )
                    }
                </Row>
            </Container>
        )
}
}
export default BookList
