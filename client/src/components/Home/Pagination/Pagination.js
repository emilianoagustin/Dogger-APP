import React from 'react';
import { useDispatch } from 'react-redux';
import { setPageNumber } from '../../../actions/actions';
import { paginateNumbers } from '../../../Utils';

function Pagination({change}) {
    const dispatch = useDispatch()

    return (
        <div>
            {paginateNumbers(8, change.length).map( number => (
                    <button key={number} onClick={() => dispatch(setPageNumber(number))}>{number}</button>
            ))}
        </div>
    )
}

export default Pagination;