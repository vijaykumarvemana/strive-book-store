import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './Addcomment'
import Loading from './Loading'
import Error from './Error.jsx'

class CommentArea extends Component {

    state = {
        comments: [], // comments will go here
        isLoading: true,
        isError: false
    }

    fetchComments = async() => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjBlNzJkNTI2MjAwMTViNmRjOTEiLCJpYXQiOjE2MjkyODY2MzIsImV4cCI6MTYzMDQ5NjIzMn0.DmqdR4D3rw25zQ1mpfIjVbVzPkMA5en-dJpOGpqfwP4"
                }
            })
            console.log(response)
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, isLoading: false, isError: false })
            } else {
                console.log('error')
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }

    componentDidMount() {
       this.fetchComments()
    }
    componentDidUpdate (previousProps, previousState) {
        if(previousProps.asin !== this.props.asin){

            this.fetchComments()
        }
    }
    render() {
        return (
            <div>
                {this.state.isLoading && <Loading />}
                {this.state.isError && <Error />}
                <AddComment asin={this.props.asin} />
                <CommentList commentsToShow={this.state.comments} />
            </div>
        )
    }
}

export default CommentArea