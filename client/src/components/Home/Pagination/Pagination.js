import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from '../../../actions/actions';
import { paginateNumbers, prevPage, nextPage } from '../../../Utils';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import './Pagination.css'

function Pagination({change}) {
    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.pageNumber);
    const [isActive, setIsActive] = useState({activeIndex: null});    
    const handleActive = (index) => setIsActive({activeIndex: index});
    const handlePrev = (index) => index !== 0 ? setIsActive({activeIndex: index - 1}) : 0;
    const handleNext = (index) => {
        let lastPage = Math.ceil(change.length / 8);
        console.log(lastPage);
        if(index !== lastPage - 1) return setIsActive({activeIndex: index + 1});
        else return lastPage - 1
    }

    return (
        <div className='pagination-container'>
            <span 
                className='pagination-button arrow-icon' 
                onClick={() => {
                    dispatch(setPageNumber(prevPage(pageNumber)))
                    handlePrev(isActive.activeIndex)
                }}
            >
            <MdKeyboardArrowLeft />
            </span>
            {paginateNumbers(8, change.length).map( (number, i) => (
                    <span 
                        className={isActive.activeIndex === i ? 'pagination-button active' : 'pagination-button'}
                        key={number}
                        onClick={() => { 
                            dispatch(setPageNumber(number))
                            handleActive(i)
                        }}
                    >
                    {number}
                    </span>
            ))}
            <span 
                className='pagination-button arrow-icon' 
                onClick={() => {
                    dispatch(setPageNumber(nextPage(pageNumber, change.length, 8)))
                    handleNext(isActive.activeIndex)
                }}
            >
            <MdKeyboardArrowRight />
            </span>
        </div>
    )
}

export default Pagination;