import { 
    GET_DOGS, 
    GET_TEMPERAMENT, 
    GET_DOG_BY_ID, 
    GET_DOGS_BY_NAME
} from "../actions/actionTypes";

const initialState = {
    dogs: [],
    dogsByName: [],
    dogById: {},
    temperaments: [],
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_DOGS: {
            const { allDogs, temp } = action.payload
            if(temp){
                let filtered = allDogs.filter( 
                    dog => dog.temperament && dog.temperament.toLowerCase().includes(temp)
                ) 
                return{
                    ...state,
                    dogs: filtered
                }
            }
            return {
                ...state,
                dogs: allDogs
            }
        }
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogsByName: action.payload
            }
        case GET_DOG_BY_ID:
            return {
                ...state,
                dogById: action.payload
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