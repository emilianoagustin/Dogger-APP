import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../../actions/actions';

function OrderInput() {
    
    const dispatch = useDispatch();
    const [sort, setSort] = useState('');

    useEffect(() => {
        dispatch(getDogs(null, null, sort))
    }, [sort])

    const handleSelectChange = (e) => {
        setSort(e.target.value);
    }    

    return (
        <div>
            <select name='sorting' onChange={(e) => handleSelectChange(e)}>
                <option value=''>sort results by</option>
                <option value='nameASC'>Name: A-Z</option>
                <option value='nameDESC'>Name: Z-A</option>
                <option value='weightASC'>Weight: Low to High</option>
                <option value='weightDESC'>Weight: High to Low</option>
            </select>
        </div>
    )
}

export default OrderInput
