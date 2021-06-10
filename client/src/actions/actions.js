import {
GET_DOGS,
GET_DOG_DETAIL,
GET_TEMPERAMENT,
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

export const getDogs = async (name) => {
    return (dispatch) => {
        const response = await axios.get(DOG_URL + name);
        const allDogs = response.data.json();
        return dispatch({
            type: GET_DOGS,
            payload: allDogs
        })
    }
}

export const getDogDetail = async (id) => {
    return (dispatch) => {
        const response = await axios.get(DOG_URL + id);
        const dogDetail = response.data.json();
        return dispatch({
            type: GET_DOG_DETAIL,
            payload: dogDetail
        })
    }
}

export const getTemperament = async () => {
    return (dispatch) => {
        const response = await axios.get(TEMPERAMENT_URL);
        const dogTemperament = response.data.json();
        return dispatch({
            type: GET_TEMPERAMENT,
            payload: dogTemperament
        })
    }
}