import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchDogs } from '../../../actions/actions';

function SearchInput() {
    
    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    const handleSearch = () => {
        dispatch(searchDogs(value));
        setValue('')
    }

    return (
        <div>
                <input type='text' placeholder='search breed' value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type='button' onClick={handleSearch}>search</button>
        </div>
    )
}

export default SearchInput
