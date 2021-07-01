import React from 'react';
import './Sort.css';

function Sort({ onChange, onClick }) {
    
    return (
        <div className='sort-container'>
            <label>
                Sort results
                <select name='sort' onChange={(e) => onChange(e)} onClick={onClick}>
                    <option value=''>sort results by..</option>
                    <option value='asc'>Name: A-Z</option>
                    <option value='desc'>Name: Z-A</option>
                    <option value='ascWeight'>Weight: Low to High</option>
                    <option value='descWeight'>Weight: High to Low</option>
                </select>
            </label>
        </div>
    )
}

export default Sort;
