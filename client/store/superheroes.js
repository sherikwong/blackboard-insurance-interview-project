import axios from 'axios';
import { SUPERHERO_URL, CORS_PROXY } from '../constants';

const GET_SUPERHERO = 'GET_SUPERHERO';

// Action creator
export const profileAction = superhero => ({
    type: GET_SUPERHERO,
    superhero
})
export const biographyAction = superhero => ({
    type: GET_SUPERHERO,
    superhero
})

// Thunk
export const fetchSuperHeroById = id => {
    return async dispatch => {
        const { data } = await axios.get(`${CORS_PROXY}${SUPERHERO_URL}/${id}`);
        dispatch(profileAction(data));
    }
}
export const fetchBiographyById = id => {
    return async dispatch => {
        const { data } = await axios.get(`${CORS_PROXY}${SUPERHERO_URL}/${id}/biography`);
        dispatch(biographyAction(data));
    }
}

const superHeroReducer = (state = [], action) => {
    switch (action.type) {
        case GET_SUPERHERO:
            return action.superheroes;
        default:
            return state;
    }
}

export default superHeroReducer;
