const CommentsArea = ({ bookc}) => (
    // conditional rendering with a ternary operator
    bookc ? (
        <ul>
            {
                // the list is listening to the state in order to know when to refresh!
                bookc.map(c => (
                    <li key={c.id}>{c.comment}</li>
                ))

                // dish?.comments.map(c => (
                //     <li key={c.id}>{c.comment}</li>
                // ))
                // that question mark is called OPTIONAL CHAINING
                // it will check the truthiness of dish before trying to access its comments property

            }
        </ul>
    ) : (
        <div>no book selected</div>
    )
)

export default CommentsArea