import {
GET_DOGS,
GET_DOG_DETAIL,
GET_TEMPERAMENT,
GET_DOGS_BY_NAME,
TOGGLE_LOADING,
} from './actionTypes';
import axios from 'axios';
import { DOG_URL, CREATE_DOG_URL, TEMPERAMENT_URL} from '../constants';

export const toggleLoading = () => {
    return {type: TOGGLE_LOADING, payload: true}
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
            type: GET_DOGS_BY_NAME,
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

        return dispatch({
            type: GET_TEMPERAMENT,
            payload: dogTemperament
        })
    }
}