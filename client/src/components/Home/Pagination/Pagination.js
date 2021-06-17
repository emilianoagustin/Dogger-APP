import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumber } from '../../../actions/actions';
import { paginateNumbers } from '../../../Utils';

function Pagination() {
    const dispatch = useDispatch()
    const dogs = useSelector(state => state.dogs);

    return (
        <div>
            {paginateNumbers(8, dogs.length).map( number => (
                <div>
                    <button key={number} onClick={() => dispatch(setPageNumber(number))}>{number}</button>
                </div>
            ))}
        </div>
    )
}

export default Pagination;