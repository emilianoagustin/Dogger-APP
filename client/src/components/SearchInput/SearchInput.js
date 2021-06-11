import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchDogs } from '../../actions/actions';

function SearchInput() {
    
    const dispatch = useDispatch();
    const searchDog = useSelector(state => state.searchDogs);
    console.log(searchDog);
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(searchDogs(e.target.value));
    }

    return (
        <div>
            <form onSubmit={(e) => handleSearchSubmit(e)}>
                <input type='text' placeholder='search breed' value=''/>
                <button type='submit'>search</button>
            </form>
        </div>
    )
}

export default SearchInput
