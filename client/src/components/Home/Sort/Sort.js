import { React, useState, useEffect } from 'react';
import './Sort.css';

function OrderInput({ onChange }) {
    
    return (
        <div className='sort-container'>
            <label>
                Sort results
                <select name='sorting' onChange={(e) => onChange(e)}>
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

export default OrderInput
