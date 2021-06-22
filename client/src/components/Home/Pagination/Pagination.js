import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageNumber } from '../../../actions/actions';
import { paginateNumbers } from '../../../Utils';
import './Pagination.css'

function Pagination({change}) {
    const dispatch = useDispatch()
    
    return (
        <div className='pagination-container'>
            {paginateNumbers(8, change.length).map( number => (
                    <button className='pagination-button' key={number} onClick={() => dispatch(setPageNumber(number))}>{number}</button>
            ))}
        </div>
    )
}

export default Pagination;