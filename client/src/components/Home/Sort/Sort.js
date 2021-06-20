import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../../actions/actions';

function OrderInput({ onChange }) {
    
    // const dispatch = useDispatch();
    // const [sort, setSort] = useState('nameASC');

    // useEffect(() => {
    //     dispatch(getDogs(null, null, sort))
    // }, [sort])

    // const handleSelectChange = (e) => {
    //     setSort(e.target.value);
    // }    

    return (
        <div>
            <select name='sorting' onChange={(e) => onChange(e)}>
                <option value='none'>sort results by..</option>
                <option value='asc'>Name: A-Z</option>
                <option value='desc'>Name: Z-A</option>
            </select>
        </div>
    )
}

export default OrderInput
