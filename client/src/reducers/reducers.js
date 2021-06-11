import { GET_DOGS, GET_TEMPERAMENT, GET_DOG_DETAIL } from "../actions/actionTypes";

const initialState = {
    dogs: [],
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