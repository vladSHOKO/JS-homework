import React from "react";

const CommentList = (props) => {
    const {comments, deleteComment} = props

    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <div key={comment.id} className={"comment"}>
                            <u><b>Author</b></u>
                            <p>{comment.author}</p>
                            <u><b>Comment</b></u>
                            <p>{comment.text}</p>
                            <u><b>Date</b></u>
                            <p>{comment.date}</p>
                            <button onClick={() => {
                                deleteComment(comment.id)
                            }}>Удалить
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentList;