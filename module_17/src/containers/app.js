import React from "react";
import {connect} from 'react-redux';

import CommentList from '../components/comment-list'
import AddComment from '../components/add-comment'

import {addComment, deleteComment} from "../actions";


let App = (props) => {
    const {
        comments, deleteComment, addComment
    } = props;

    return (
        <div>
            <CommentList comments={comments} deleteComment={deleteComment} />
            <AddComment addComment={addComment} />
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        comments: state
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        addComment: (authorName, commentText) => dispatch(addComment(authorName, commentText)),
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProp
)(App);

export default App;