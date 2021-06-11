import { GET_DOGS, GET_TEMPERAMENT, GET_DOG_DETAIL, SEARCH_DOGS } from "../actions/actionTypes";

const initialState = {
    dogs: [],
    searchDogs: [],
    dogDetail: {},
    temperaments: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload
            }
        case SEARCH_DOGS:
            return {
                ...state,
                searchDogs: action.payload
            }
        case GET_DOG_DETAIL:
            return {
                ...state,
                dogDetail: action.payload
            }
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperaments: action.payload
            }
        default:
            return state;
    }
}