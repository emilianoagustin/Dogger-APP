import React from 'react'
import { MdSearch } from 'react-icons/md';
import './SearchBox.css';

function SearchBox({ onChange, onClick, value }) {

    return (
        <div className='searchbox-container'>
                <input className='searchbox-input' type='text' placeholder='search your dog...' name='name' value={value} onChange={(e) => onChange(e)}/>
                <span className='searchbox-button' onClick={onClick}>
                    <MdSearch />
                </span>
        </div>
    )
}

export default SearchBox;
