import React from 'react'
import { MdSearch } from 'react-icons/md';
import { IconContext } from "react-icons";
import './SearchBox.css';

function SearchBox({ onChange, onClick, value }) {

    return (
        <div className='searchbox-container'>
                <input className='searchbox-input' type='text' placeholder='search breed' name='name' value={value} onChange={(e) => onChange(e)}/>
                <button className='searchbox-button' type='button' onClick={onClick}>search
                <IconContext.Provider value={{ className:'search-icon'}}>
                <MdSearch />
                </IconContext.Provider>
                </button>
        </div>
    )
}

export default SearchBox;
