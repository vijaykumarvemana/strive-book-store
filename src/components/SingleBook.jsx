import React from 'react'
import {Card} from 'react-bootstrap'
import CommentsArea from './CommentArea'


class SingleBook extends React.Component{ 
    
    

    
    state={
        selected:false,
        comments : []
    }
componentDidMount = async() => {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method : "GET", 
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjBlNzJkNTI2MjAwMTViNmRjOTEiLCJpYXQiOjE2MjkyODY2MzIsImV4cCI6MTYzMDQ5NjIzMn0.DmqdR4D3rw25zQ1mpfIjVbVzPkMA5en-dJpOGpqfwP4"
            }
        } )
        if (response.ok){
            const comments = await response.json()
            this.setState({
                comments
            })
        }
       
    }
catch (error) {
       console.log(error) 
    }
}
    render(){
    return(
          
            <Card 
            className={this.state.selected?"d-flex d-block mx-3 w-100 h-100 bg-danger mt-3 mb-3":"d-flex d-block mx-3 w-100 h-100 bg-warning mt-3 mb-3"}
            onClick={()=>this.setState({selected:!this.state.selected && this.state.comments[0]})} //SUPER TRICK!!
            
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body className="text-dark d-flex flex-column flex-end">
                    <Card.Title>{this.props.book.title}</Card.Title>
                    {/* <Card.Text className="ml-auto font-italic font-weight-light">€ {this.props.book.price}</Card.Text> */}
                    {/* <Button variant="success">add to cart</Button> */}
                </Card.Body>
            </Card>
   
)

}
<CommentArea bookc ={this.state.selected}/>
}

export default SingleBook