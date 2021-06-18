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
    dogsByName: [],
    dogById: {},
    temperaments: [],
    isLoading: false,
    pageNumber: 1
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_DOGS: {
            const { allDogs, temp, origin, sort } = action.payload
            let filtered;
            if(temp){
                filtered = allDogs.filter( 
                    dog => dog.temperament && dog.temperament.toLowerCase().includes(temp)
                ) 
                return{
                    ...state,
                    dogs: filtered
                }
            }
            
            if(origin){
                if (origin === 'original') {
                    filtered = allDogs.filter( dog => dog.flag)
                    return{
                        ...state,
                        dogs: filtered
                    }
                } else if (origin === 'created') {
                    filtered = allDogs.filter( dog => !dog.flag)
                    return{
                        ...state,
                        dogs: filtered
                    }
                } else return {
                    ...state,
                    dogs: allDogs
                }
            }
            if(sort && sort.includes('name')) {
                if(sort === 'nameASC'){
                    return {
                        ...state,
                        dogs: allDogs.sort((a,b) => {
                            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 :
                            a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0
                            })
                    }
                } else {
                    return {
                        ...state,
                        dogs: allDogs.sort((a,b) => {
                            return a.name.toLowerCase() < b.name.toLowerCase() ? 1 :
                            a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 0
                            })
                    }
                }
            }
            if(sort && sort.includes('weight')) {
                if(sort === 'weightASC'){
                    return {
                        ...state,
                        dogs: allDogs.sort((a,b) => {
                            return a.weight.toLowerCase() > b.weight.toLowerCase() ? 1 :
                            a.weight.toLowerCase() < b.weight.toLowerCase() ? -1 : 0
                            })
                    }
                } else {
                    return {
                        ...state,
                        dogs: allDogs.sort((a,b) => {
                            return a.weight.toLowerCase() < b.weight.toLowerCase() ? 1 :
                            a.weight.toLowerCase() > b.weight.toLowerCase() ? -1 : 0
                            })
                    }
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