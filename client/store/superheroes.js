import axios from 'axios';
import { SUPERHERO_URL, CORS_PROXY } from '../constants';

const GET_SUPERHERO = 'GET_SUPERHERO';
const GET_BIOGRAPHY = 'GET_BIOGRAPHY';
const GET_IMAGE = 'GET_IMAGE';

// Action creator
export const profileAction = superhero => ({
    type: GET_SUPERHERO,
    superhero
})
export const biographyAction = biography => ({
    type: GET_BIOGRAPHY,
    biography
})
export const imageAction = image => ({
    type: GET_IMAGE,
    image
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
export const fetchImageById = id => {
    return async dispatch => {
        const { data } = await axios.get(`${CORS_PROXY}${SUPERHERO_URL}/${id}/image`);
        dispatch(imageAction(data));
    }
}

const superHeroReducer = (state = [], action) => {
    switch (action.type) {
        case GET_SUPERHERO:
            return action.superhero;
        case GET_BIOGRAPHY:
            return [...state, action.biography];
        case GET_IMAGE:
            return action.image;
        default:
            return state;
    }
}

export default superHeroReducer;
