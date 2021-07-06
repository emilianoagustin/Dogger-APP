import {
    CREATE_DOG, 
    GET_DOGS, 
    GET_TEMPERAMENT, 
    GET_DOG_BY_ID, 
    SET_PAGE_NUMBER,
    CLEAR_DOG,
    LOADING
} from "../actions/actionTypes";

const initialState = {
    createdDog:{},
    dogs: [],
    dogById: {},
    temperaments: [],
    pageNumber: 1,
    isLoading: false
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_DOGS: {
            return {
                    ...state,
                    dogs: [...action.payload],
                    pageNumber: 1,
                    isLoading: false
            }
        }
        case GET_DOG_BY_ID:
            return {
                ...state,
                dogById: action.payload,
                isLoading: false
            }
        case GET_TEMPERAMENT:{
            return {
                ...state,
                temperaments: action.payload,
            }
        }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload
            }
        case CREATE_DOG:
            return {
                ...state,
                createdDog: action.payload
            }
        case CLEAR_DOG:
            return {
                ...state,
                dogById: {}
            }
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}