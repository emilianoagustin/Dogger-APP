import { 
    GET_DOGS, 
    GET_TEMPERAMENT, 
    GET_DOG_DETAIL, 
    SEARCH_DOGS,
    SEARCH_INPUT_STATE
} from "../actions/actionTypes";

const initialState = {
    dogs: [],
    searchDogs: [],
    dogDetail: {},
    temperaments: [],
    inputValue: ''
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
        case SEARCH_INPUT_STATE:
            return {
                ...state,
                inputValue: action.payload
            }
        default:
            return state;
    }
}