import axios from 'axios';

const GET_ALL_ALIGNMENT = 'GET_ALL_ALIGNMENT';
const FILTER_CHAR = 'FILTER_CHAR';

export const alignmentAction = (characters, alignment) => ({
    type: GET_ALL_ALIGNMENT,
    characters,
    alignment
})

export const filterAction = (characters, alignment) => ({
    type: FILTER_CHAR,
    filtered: {
        [alignment]: characters
    }
})

export const fetchByAlignment = alignment => {
    return async dispatch => {
        const { data } = await axios.get(`/api/superheroes/alignment/${alignment}`);
        dispatch(alignmentAction(data, alignment));
    }
}

export const filterBySubstring = (substring, alignment, allCharOfAlignment) => {
    return dispatch => {
        const filtered = allCharOfAlignment.filter(char => char.fullName.toLowerCase().includes(substring));
        dispatch(filterAction(filtered, alignment));
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
        case FILTER_CHAR:
            return {
                filtered: {
                    ...state.filtered,
                    [action.alignment]: action.characters
                }
            }
        default:
            return state;
    }
}

export default charactersReducer;
