import axios from 'axios';

const GET_ALL_ALIGNMENT = 'GET_ALL_ALIGNMENT';

export const alignmentAction = (characters, alignment) => ({
    type: GET_ALL_ALIGNMENT,
    characters,
    alignment
})

export const fetchByAlignment = alignment => {
    return async dispatch => {
        const { data } = await axios.get(`/api/superheroes/alignment/${alignment}`);
        dispatch(alignmentAction(data, alignment));
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
        default:
            return state;
    }
}

export default charactersReducer;
