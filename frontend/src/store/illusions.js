import { csrfFetch } from './csrf'


const GET_ALL_ILLUSIONS = '/illusions/getAllIllusions';
const GET_ONE_ILLUSION = '/illusions/getAnIllusion';
const ADD_ONE = '/illusions/addOne';
const UPDATE_ONE = '/illusions/updateOne';
const DELETE_ONE = '/illusions/deleteOne';
// const GET_USER_ILLUSIONS = '/illusions/getUserIllusions';


//action creators
const getIllusions = (illusions) => {
    return {
        type: GET_ALL_ILLUSIONS,
        illusions
    }
}

const getAnIllusion = (illusion) => {
    return {
        type: GET_ONE_ILLUSION,
        illusion
    }
}

// const getUserIllusions = (illusions) => {
//     return {
//         type: GET_USER_ILLUSIONS,
//         illusions
//     }
// }

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

    const deletedIllusionId = await res.json();
    console.log(deletedIllusionId);
    dispatch(deleteOne(deletedIllusionId))
    return deletedIllusionId;

}

export const updateIllusion = updateIllusion => async dispatch => {
    // console.log(updateIllusion)
    // console.log("=------------", updateIllusion)
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

// export const getUserIllusions = () => async (dispatch) => {
//     const response = await fetch(`/api/explore`)
// }

export const getOneIllusion = (illusionId) => async (dispatch) => {
    const response = await fetch(`/api/explore/${illusionId}`)
    const illusion = await response.json();
    dispatch(getAnIllusion(illusion));
    return illusion
}

export const getAllIllusions = () => async (dispatch) => {
    const response = await fetch('/api/explore')
    if (response.ok) {
        const data = await response.json();
        dispatch(getIllusions(data));
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
            delete newState[action.illusion]
            return newState
        }
        default:
            return state;
    }
}

export default illusionsReducer;
