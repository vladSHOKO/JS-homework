const generateDate = () => {
    const date = new Date()
    return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
}

export const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                id: action.id,
                author: action.authorName,
                text: action.commentText,
                date: generateDate()
            }]
        case 'DELETE_COMMENT':
            return state.filter((comment) => comment.id !== action.id)
        default:
            return state
    }
}
