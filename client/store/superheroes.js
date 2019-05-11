import axios from 'axios';
import { SUPERHERO_URL, CORS_PROXY } from '../constants';

const GET_SUPERHERO = 'GET_SUPERHERO';
const GET_BIOGRAPHY = 'GET_BIOGRAPHY';
const GET_IMAGE = 'GET_IMAGE';
const GET_ALL_ALIGNMENT = 'GET_ALL_ALIGNMENT';

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
export const alignmentAction = (characters, alignment) => ({
    type: GET_ALL_ALIGNMENT,
    characters,
    alignment
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

export const fetchByAlignment = alignment => {
    return async dispatch => {
        const { data } = await axios.get(`/api/superheroes/alignment/${alignment}`);
        dispatch(alignmentAction(data, alignment));
    }
}

const charactersReducer = (state = [], action) => {
    switch (action.type) {
        case GET_SUPERHERO:
            return action.superhero;
        case GET_BIOGRAPHY:
            return [...state, action.biography];
        case GET_IMAGE:
            return action.image;
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
