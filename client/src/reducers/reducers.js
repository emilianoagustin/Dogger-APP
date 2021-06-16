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
            if(sort) {
                if(sort === 'nameASC'){
                    console.log('hola');
                    const sorted = allDogs.sort((a,b) => {
                        return a.name > b.name ? 1 :
                        a.name < b.name ? -1 : 0
                        })
                    return {
                        ...state,
                        dogs: sorted
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
        case GET_DOG_BY_ID:{
            const {
                name,
                height,
                weight,
                life_span
            } = action.payload
            console.log(height);
            return {
                ...state,
                dogById: action.payload
            }
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