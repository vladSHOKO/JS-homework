import React from "react";

const AddComment = (props) => {
    const {addComment} = props
    return (
        <div>
            <p>
                <input
                    id="author-input"
                    type="text"
                    placeholder="Автор комментария"
                />
            </p>
            <p>
                <input
                    id="text-input"
                    type="text"
                    placeholder="Новый комментарий"
                />
            </p>

            <p>
                <button onClick={
                    () => {
                        let authorName = document.getElementById("author-input")
                        let commentText = document.getElementById("text-input")
                        if (authorName.value !== '' && commentText.value !== '') {
                            addComment(authorName.value, commentText.value)
                        }
                        authorName.value = '';
                        commentText.value = '';
                    }
                }>Добавить комментарий
                </button>
            </p>
        </div>
    )
}

export default AddComment;