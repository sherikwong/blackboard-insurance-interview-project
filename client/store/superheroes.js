import axios from 'axios';
import { SUPERHERO_URL, CORS_PROXY } from '../constants';

<<<<<<< HEAD
const GET_SUPERHERO = 'GET_SUPERHERO';
const GET_ALL_ALIGNMENT = 'GET_ALL_ALIGNMENT';

// Action creator
export const profileAction = superhero => ({
    type: GET_SUPERHERO,
    superhero
})
=======
const GET_ALL_ALIGNMENT = 'GET_ALL_ALIGNMENT';


>>>>>>> fucked-up-db-call
export const alignmentAction = (characters, alignment) => ({
    type: GET_ALL_ALIGNMENT,
    characters,
    alignment
})

<<<<<<< HEAD
// Thunk
export const fetchSuperHeroById = id => {
    return async dispatch => {
        const { data } = await axios.get(`${CORS_PROXY}${SUPERHERO_URL}/${id}`);
        dispatch(profileAction(data));
    }
}
=======

>>>>>>> fucked-up-db-call

export const fetchByAlignment = alignment => {
    return async dispatch => {
        const { data } = await axios.get(`/api/superheroes/alignment/${alignment}`);
        dispatch(alignmentAction(data, alignment));
    }
}

const charactersReducer = (state = [], action) => {
    switch (action.type) {
<<<<<<< HEAD
        case GET_SUPERHERO:
            return action.superhero;
=======
>>>>>>> fucked-up-db-call
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
