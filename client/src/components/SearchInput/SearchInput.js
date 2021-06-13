import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { inputState, searchDogs } from '../../actions/actions';

function SearchInput() {
    
    const dispatch = useDispatch();
    const value = useSelector(state => state.inputValue);
    const onChange = (e) => {
        dispatch(inputState(e.target.value));
    }
    const handleSearch = () => {
        dispatch(searchDogs(value));
        dispatch(inputState(''));
    }

    return (
        <div>
                <input type='text' placeholder='search breed' value={value} onChange={onChange}/>
                <button type='button' onClick={handleSearch}>search</button>
        </div>
    )
}

export default SearchInput
