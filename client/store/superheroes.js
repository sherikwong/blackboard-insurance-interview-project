import axios from 'axios';
import { SUPERHERO_URL } from '../constants';

const GET_SUPERHEROES = 'GET_SUPERHEROES';

// Action creator
export const getSuperHeroes = superheroes => ({
    type: GET_SUPERHEROES,
    superheroes
})

// Thunk
export const fetchSuperHeroes = () => {
    return async dispatch => {
        const { data } = await axios.get(`${SUPERHERO_URL}/search/batman`);
        dispatch(getSuperHeroes(data));
    }
}

const superHeroReducer = (state = [], action) => {
    switch (action.type) {
        case GET_SUPERHEROES:
            return action.superheroes;
        default:
            return state;
    }
}

export default superHeroReducer;
