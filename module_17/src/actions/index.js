let nextCommentId = 3;

export const addComment = (authorName, commentText) => {
    return {
        type: 'ADD_COMMENT',
        id: nextCommentId++,
        authorName,
        commentText
    }
}

export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id
    }
}