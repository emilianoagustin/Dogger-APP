import React from 'react';
import { useDispatch } from 'react-redux';
import { setPageNumber } from '../../../actions/actions';
import { paginateNumbers } from '../../../Utils';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Pagination.css'

function Pagination({change}) {
    const dispatch = useDispatch()
    
    return (
        <div className='pagination-container'>
            <span className='pagination-button arrow-icon'><MdKeyboardArrowLeft /></span>
            {paginateNumbers(8, change.length).map( number => (
                    <span className='pagination-button' key={number} onClick={() => dispatch(setPageNumber(number))}>{number}</span>
            ))}
            <span className='pagination-button arrow-icon'><MdKeyboardArrowRight /></span>
        </div>
    )
}

export default Pagination;