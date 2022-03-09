import { csrfFetch } from './csrf'


const GET_ALL_ILLUSIONS = '/illusions/getAllIllusions';
const GET_ONE_ILLUSION = '/illusions/getOneIllusion';
const ADD_ONE = '/illusions/addOne';
const UPDATE_ONE = '/illusions/addOne';


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


//thunk action creator

export const updateIllusion = data => async dispatch => {
    const res = await csrfFetch('/api/explore/:illusionId', {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    const updatedIllusion = await res.json()
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
    entries: {},
    isLoading: true
};

const illusionsReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case GET_ALL_ILLUSIONS: {
            const newEntries = {};
            action.illusions.forEach((illusion) => (newEntries[illusion.id] = illusion))
            newState.entries = newEntries
            return newState;
        }
        case GET_ONE_ILLUSION: {
            let newEntries = {};
            newEntries[action.illusion?.id] = action.illusion;
            newState.entries = newEntries
            return newState;
        }
        case ADD_ONE: {
            const newEntries = {};
            newEntries[action.illusion?.id] = action.illusion
            newState.entries = newEntries
            return newState
        }
        // case UPDATE_ONE: {

        // }
        default:
            return state;
    }
}

export default illusionsReducer;
