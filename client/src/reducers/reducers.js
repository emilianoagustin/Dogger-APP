import {
    CREATE_DOG, 
    GET_DOGS, 
    GET_TEMPERAMENT, 
    GET_DOG_BY_ID, 
    GET_DOGS_BY_NAME,
    SET_PAGE_NUMBER,
    TOGGLE_LOADING,
} from "../actions/actionTypes";

const initialState = {
    createdDog:{},
    dogs: [],
    // dogsByName: [],
    dogById: {},
    temperaments: [],
    isLoading: false,
    pageNumber: 1
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_DOGS: {
            // const { allDogs } = action.payload
            return {
                    ...state,
                    dogs: action.payload
            }
        }
        case 'QUERY_DOGS':
            return {
                ...state,
                dogs: action.payload
            }
        // case GET_DOGS_BY_NAME:
        //     return {
        //         ...state,
        //         dogsByName: action.payload
        //     }
        case GET_DOG_BY_ID:
            return {
                ...state,
                dogById: action.payload
            }
        case GET_TEMPERAMENT:{
            return {
                ...state,
                temperaments: action.payload
            }
        }
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.payload
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
        default:
            return state;
    }
}