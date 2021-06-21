import { React, useState } from 'react'
import './SearchBox.css';
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
        <div className='searchbox-container'>
                <input className='searchbox-input' type='text' placeholder='search breed' value={value} onChange={(e) => onChange(e.target.value)}/>
                <button className='searchbox-button' type='button' onClick={onClick}>search</button>
        </div>
    )
}

export default SearchInput
