import {
GET_DOGS,
GET_DOG_DETAIL,
GET_TEMPERAMENT,
SEARCH_DOGS,
SORT_BY_BREED_ASC,
SORT_BY_BREED_DESC,
SORT_BY_WEIGHT_ASC,
SORT_BY_WEIGHT_DESC,
TOGGLE_LOADING,
} from './actionTypes';
import axios from 'axios';
import { DOG_URL, CREATE_DOG_URL, TEMPERAMENT_URL} from '../constants';

export const toggleLoading = () => {
    return {type: TOGGLE_LOADING}
}

export const getDogs = () => {
    return async (dispatch) => {
        const response = await axios.get(DOG_URL);
        const allDogs = response.data;
        return dispatch({
            type: GET_DOGS,
            payload: allDogs
        })
    }
}

export const searchDogs = (name) => {
    return async (dispatch) => {
        const response = await axios.get(`${DOG_URL}?name=${name}`);
        const allDogs = response.data;
        return dispatch({
            type: SEARCH_DOGS,
            payload: allDogs
        })
    }
}

export const getDogDetail = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${DOG_URL}/${id}`);
        const dogDetail = response.data;
        console.log('dogDetail ------>', dogDetail);
        return dispatch({
            type: GET_DOG_DETAIL,
            payload: dogDetail
        })
    }
}

export const getTemperament = () => {
    return async (dispatch) => {
        const response = await axios.get(TEMPERAMENT_URL);
        const dogTemperament = response.data;
        console.log('dogTemperament ------>', dogTemperament);
        return dispatch({
            type: GET_TEMPERAMENT,
            payload: dogTemperament
        })
    }
}