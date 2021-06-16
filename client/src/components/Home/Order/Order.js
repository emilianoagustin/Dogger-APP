import React from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../../actions/actions';

function OrderInput() {
    
    const dispatch = useDispatch();

    const handleSelectChange = (e) => {
        dispatch(getDogs(e.target.value));
    }
    return (
        <div>
            <select name='sorting' onChange={(e) => handleSelectChange(e)}>
                <option disabled value=''>sort results by</option>
                <option value='nameASC'>Name: A-Z</option>
                <option value='nameDESC'>Name: Z-A</option>
                <option value='weightASC'>Weight: Low to High</option>
                <option value='weightDESC'>Weight: High to Low</option>
            </select>
        </div>
    )
}

export default OrderInput
