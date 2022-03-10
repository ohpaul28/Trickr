import { csrfFetch } from './csrf'


const GET_ALL_ILLUSIONS = '/illusions/getAllIllusions';
const GET_ONE_ILLUSION = '/illusions/getOneIllusion';
const ADD_ONE = '/illusions/addOne';
const UPDATE_ONE = '/illusions/updateOne';
const DELETE_ONE = '/illusions/deleteone';


//action creators
const loadIllusions = (illusions) => {
    return {
        type: GET_ALL_ILLUSIONS,
        illusions
    }
}

const loadOneIllusion = (illusion) => {
    return {
        type: GET_ONE_ILLUSION,
        illusion
    }
}

const addOneIllusion = (illusion) => {
    return {
        type: ADD_ONE,
        illusion
    }
}

const updateOne = (illusion) => {
    return {
        type: UPDATE_ONE,
        illusion
    }
}

const deleteOne = (illusion) => {
    return {
        type: DELETE_ONE,
        illusion
    }
}


//thunk action creator
export const deleteIllusion = (illusionId) => async dispatch => {
    const res = await csrfFetch(`/api/explore/${illusionId}`, {
        method: "DELETE",
    })

    const { id: deletedIllusionId } = await res.json();
    dispatch(deleteOne(deletedIllusionId))
    return deletedIllusionId;

}

export const updateIllusion = updateIllusion => async dispatch => {
    // console.log(updateIllusion)
    console.log("=------------", updateIllusion)
    const req = await csrfFetch(`/api/explore/${updateIllusion.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateIllusion)
    })
    const updatedIllusion = await req.json()
    dispatch(updateOne(updatedIllusion))
    return updatedIllusion;
}

export const addIllusion = (data) => async dispatch => {
    const res = await csrfFetch('/api/explore', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    const newIllusion = await res.json()
    dispatch(addOneIllusion(newIllusion))
    return newIllusion;
}

export const getOneIllusion = (illusionId) => async (dispatch) => {
    const response = await fetch(`/api/explore/${illusionId}`)
    const illusion = await response.json();
    dispatch(loadOneIllusion(illusion));
    return illusion
}

export const getAllIllusions = () => async (dispatch) => {
    const response = await fetch('/api/explore')
    if (response.ok) {
        const data = await response.json();
        dispatch(loadIllusions(data));
        return data
    }
}

const initialState = {
    isLoading: true
};

const illusionsReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case GET_ALL_ILLUSIONS: {
            action.illusions.forEach((illusion) => (newState[illusion.id] = illusion))
            return newState;
        }
        case GET_ONE_ILLUSION: {
            newState[action.illusion?.id] = action.illusion;
            return newState;
        }
        case ADD_ONE: {
            newState[action.illusion?.id] = action.illusion
            return newState
        }
        case UPDATE_ONE: {
            newState[action.illusion?.id] = action.illusion
            return newState
        }
        case DELETE_ONE: {
            delete newState[action.illusion?.id]
            return newState
        }
        default:
            return state;
    }
}

export default illusionsReducer;
