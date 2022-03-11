import { csrfFetch } from './csrf'


const GET_ALL_COMMENTS = '/comments/getAllComments';
const ADD_ONE = '/comments/addOne';
const UPDATE_ONE = '/comments/updateOne';
const DELETE_ONE = 'comments/deleteOne';



//action creators
const getAllComments = (comments) => {
    return {
        type: GET_ALL_COMMENTS,
        comments
    }
}

const addOneComment = (comment) => {
    return {
        type: ADD_ONE,
        comment
    }
}

const updateOne = (comment) => {
    return {
        type: UPDATE_ONE,
        comment
    }
}

const deleteOne = (comment) => {
    return {
        type: DELETE_ONE,
        comment
    }
}



//thunk action creators
export const deleteComment = (commentId) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    })

    const deletedCommentId = await res.json();
    dispatch(deleteOne(deletedCommentId))
    return deletedCommentId;
}

export const updateComment = updatedComment => async dispatch => {
    const req = await csrfFetch(`/api/comments/${updatedComment.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedComment)
    })

    const updated = await req.json();
    dispatch(updateOne(updated))
    return updatedComment
}

export const addComment = (data) => async dispatch => {
    const res = await csrfFetch('/api/comments', {
        method: "POST",
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify(data)
    })
    const newComment = await res.json()
    dispatch(addOneComment(newComment))
}

export const getAllTheComments = (illusionId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${illusionId}`)

    if (res.ok) {
        const comments = await res.json();
        dispatch(getAllComments(comments));
        return comments
    }
}

const initialState = {};


const commentsReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case GET_ALL_COMMENTS: {
            action.comments.forEach((comment) => (newState[comment.id] = comment))
            return newState;
        }
        case ADD_ONE: {
            newState[action.comment?.id] = action.comment
            return newState
        }
        case UPDATE_ONE: {
            newState[action.comment?.id] = action.comment
            return newState
        }
        case DELETE_ONE: {
            delete newState[action.comment]
            return newState
        }
        default:
            return state;
    }
}

export default commentsReducer;
