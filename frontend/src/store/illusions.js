import csrfFetch from './csrf'


const GET_ALL_ILLUSIONS = '/photos/getAllIllusions';

const loadIllusions = (illusions) => {
    return {
        type: GET_ALL_ILLUSIONS,
        illusions
    }
}


export const getAllIllusions = () => async (dispatch) => {
    const  response = await csrfFetch('/api/illusions')

    if (response.ok) {
        const data = await response.json();

        dispatch(loadIllusions(data));
        return data
    }
}

const initialState = {};

const illusionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ILLUSIONS: {
            const newState = {};
            action.illusions.forEach((illusion) => (newState[illusion.id] = illusion))
            return newState;
        }
        default:
            return state;
    }
}

export default illusionsReducer;
