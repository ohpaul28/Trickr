import csrfFetch from './csrf'


const GET_ALL_ILLUSIONS = '/photos/getAllIllusions';

const loadIllusions = (illusions) => {
    return {
        type: GET_ALL_ILLUSIONS,
        illusions
    }
}


export const getAllIllusions = () => async (dispatch) => {
    const  response = await fetch('/api/illusions')

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
    switch (action.type) {
        case GET_ALL_ILLUSIONS: {
            const newState = {...state};
            const newEntries = {};
            action.illusions.forEach((illusion) => (newEntries[illusion.id] = illusion))
            newState.entries = newEntries
            return newState;
        }
        default:
            return state;
    }
}

export default illusionsReducer;
