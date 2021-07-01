import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from '../../../actions/actions';
import { paginateNumbers, prevPage, nextPage } from '../../../Utils';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Pagination.css'

function Pagination({change}) {
    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.pageNumber);

    return (
        <div className='pagination-container'>
            <span className='pagination-button arrow-icon' onClick={() => dispatch(setPageNumber(prevPage(pageNumber)))}><MdKeyboardArrowLeft /></span>
            {paginateNumbers(8, change.length).map( number => (
                    <span 
                        className='pagination-button' 
                        key={number}
                        onClick={() => dispatch(setPageNumber(number))}
                    >
                    {number}
                    </span>
            ))}
            <span className='pagination-button arrow-icon' onClick={() => dispatch(setPageNumber(nextPage(pageNumber, change.length, 8)))}><MdKeyboardArrowRight /></span>
        </div>
    )
}

export default Pagination;