import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjBlNzJkNTI2MjAwMTViNmRjOTEiLCJpYXQiOjE2MjkyODY2MzIsImV4cCI6MTYzMDQ5NjIzMn0.DmqdR4D3rw25zQ1mpfIjVbVzPkMA5en-dJpOGpqfwP4"
            }
        })
        if (response.ok) {
            alert('comment deleted!')
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>Delete</Button>
    </ListGroup.Item>
)

export default SingleComment