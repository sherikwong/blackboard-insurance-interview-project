import axios from 'axios';

const GET_ALL_ALIGNMENT = 'GET_ALL_ALIGNMENT';
const GET_STATS = 'GET_STATS';

export const alignmentAction = (characters, alignment) => ({
    type: GET_ALL_ALIGNMENT,
    characters,
    alignment
})

export const fetchByAlignment = alignment => {
    return async dispatch => {
        const { data } = await axios.get(`/api/characters/alignment/${alignment}`);
        dispatch(alignmentAction(data, alignment));
    }
}
export const statsAction = (stats) => ({
    type: GET_STATS,
    stats,
})

export const fetchStats = characterId => {
    return async dispatch => {
        const { data } = await axios.get(`/api/characters/${characterId}/stats`);
        dispatch(statsAction(data));
    }
}

const charactersReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_ALIGNMENT:
            return {
                alignment: {
                    ...state.alignment,
                    [action.alignment]: action.characters
                }
            };
        case GET_STATS:
            return action.stats;
        default:
            return state;
    }
}

export default charactersReducer;
