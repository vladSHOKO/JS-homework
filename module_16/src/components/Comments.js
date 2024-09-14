import React from "react";

export class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: localStorage.getItem("comments") !== null ? JSON.parse(localStorage.getItem("comments")) :
                [
                {
                    author: 'John',
                    text: 'test text',
                    date: '11.12.2024',
                },
                {
                    author: 'Pavel',
                    text: 'Text Text Text',
                    date: '14.08.2023',
                },
            ],
            newCommentText: '',
            newCommentAuthor: ''
        }
    }

    deleteComment(i) {
        const {comments} = this.state
        const newComments = comments.filter((comment, index) => index !== i)
        this.setState({comments: newComments})
        this.updateLocalStorage()
    }

    addComment() {
        const comments = this.state.comments
        comments.push({
            author: this.state.newCommentAuthor,
            text: this.state.newCommentText,
            date: this.generateDate()
        })

        this.setState({comments})
        this.updateLocalStorage()
    }

    generateDate() {
        const date = new Date()
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
    }

    updateLocalStorage() {
        localStorage.clear()
        localStorage.setItem('comments', JSON.stringify(this.state.comments))
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map((comment, index) => {
                        return (
                            <div key={index} className={"comment"}>
                                <u><b>Author</b></u>
                                <p>{comment.author}</p>
                                <u><b>Comment</b></u>
                                <p>{comment.text}</p>
                                <u><b>Date</b></u>
                                <p>{comment.date}</p>
                                <button onClick={() => {
                                    this.deleteComment(index)
                                }}>Удалить
                                </button>
                            </div>
                        )
                    })
                }
                <p>
                    <input
                        type="text"
                        placeholder="Автор комментария"
                        value={this.state.newCommentAuthor}
                        onChange={event => {
                            this.setState({newCommentAuthor: event.target.value})
                        }}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="Новый комментарий"
                        value={this.state.newCommentText}
                        onChange={event => {
                            this.setState({newCommentText: event.target.value})
                        }}
                    />
                </p>

                <p>
                    <button onClick={
                        () => {
                            if (this.state.newCommentText !== '' && this.state.newCommentAuthor !== '')
                                this.addComment()
                        }
                    }>Добавить комментарий
                    </button>
                </p>
            </div>
        );
    }


}