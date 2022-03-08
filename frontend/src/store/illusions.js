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

const loadOneIllusion = (illusions) => {
    return {
        type: GET_ONE_ILLUSION,
        illusions
    }
}

const addOneIllusion = (illusions) => {
    return {
        type: ADD_ONE,
        illusions
    }
}

const updateOne = (illusions) => {
    return {
        type: UPDATE_ONE,
        illusions
    }
}


//thunk action creator
export const getOneIllusion = (illusionId) => async (dispatch) => {
    const response = await csrfFetch(`/api/explore/${illusionId}`)

    if (response.ok) {
        const illusion = await response.json();
        dispatch(loadOneIllusion(illusion));
        return illusion
    }
}

export const getAllIllusions = () => async (dispatch) => {
    const  response = await csrfFetch('/api/explore')

    if (response.ok) {
        const data = await response.json();

        dispatch(loadIllusions(data));
        console.log("---------------------------",data)
        return data
    }
}

const initialState = {
    entries: {},
    isLoading: true
};

const illusionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ILLUSIONS: {
            const newState = {...state};
            const newEntries = {};
            action.illusions.forEach((illusion) => (newEntries[illusion.id] = illusion))
            newState.entries = newEntries
            return newState;
        }
        case GET_ONE_ILLUSION: {
            return {
                ...state,
                [action.illusion.id]: {
                    ...state[action.illusion.id],
                    ...action.illusion
                }
            }
        }
        default:
            return state;
    }
}

export default illusionsReducer;
