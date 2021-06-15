import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, getDogs } from '../../actions/actions';


function FilterInput() {
    const dispatch = useDispatch();

    const temperaments = useSelector(state => state.temperaments);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        dispatch(getTemperament());
    }, [dispatch])

    const onChange = (e) => {
        setSelected(e.target.value)
        // setSelected(selected.concat(e.target.value + ', '))
    }

    const handleFilter = () => {
        dispatch(getDogs(selected))
        setSelected('')
    }

    return (
        <div>
            <label htmlFor='temperaments'>Temperament</label>
            <select name="temperaments" onChange={(e) => onChange(e)}>
                <option value=''>select a temperament</option>
                {temperaments.sort((a,b) => {
                    return a.name > b.name ? 1 :
                    a.name < b.name ? -1 : 0
                    })
                    .map( (t, i) => {
                    return (
                        <option key={i} value={t.name.toLowerCase()}>{t.name}</option>
                    )
                    })
                }
            </select>
            original<input type='radio'/>
            created<input type='radio'/>
            <button type='button' onClick={handleFilter}>Filter</button>
        </div>
    )
}

export default FilterInput
