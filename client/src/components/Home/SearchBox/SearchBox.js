import { React, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { searchDogs } from '../../../actions/actions';

function SearchInput({ onChange, onClick, value }) {
    
    // const dispatch = useDispatch();
    // const [value, setValue] = useState('')

    // const handleSearch = () => {
    //     // dispatch(searchDogs(value));
    //     setValue('')
    // }

    return (
        <div>
                <input type='text' placeholder='search breed' value={value} onChange={(e) => onChange(e.target.value)}/>
                <button type='button' onClick={onClick}>search</button>
        </div>
    )
}

export default SearchInput
