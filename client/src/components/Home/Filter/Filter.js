import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperament, getDogs } from '../../../actions/actions';


function FilterInput() {
    const dispatch = useDispatch();

    const temperaments = useSelector(state => state.temperaments);
    const [selected, setSelected] = useState('');
    const [radio, setRadio] = useState('all')

    useEffect(() => {
        dispatch(getTemperament())
    }, [dispatch])

    const handleSelectChange = (e) => {
        setSelected(e.target.value)
    }

    const handleRadioChange = (e) => {
        setRadio(e.target.value)
    }

    const handleFilter = () => {
        dispatch(getDogs(selected, radio))
        setSelected('')
    }

    return (
        <div>
            <label htmlFor='temperaments'>Temperament</label>
            <select name="temperaments" onChange={(e) => handleSelectChange(e)}>
                <option value=''>select a temperament</option>
                {temperaments.map( (t, i) => {
                    return (
                        <option key={i} value={t.name.toLowerCase()}>{t.name}</option>
                    )
                    })
                }
            </select>

                all<input type='radio' value='all' 
                    checked={radio === 'all'}
                    onChange={(e) => handleRadioChange(e)}
                    />
                original<input type='radio' value='original' 
                    checked={radio === 'original'}
                    onChange={(e) => handleRadioChange(e)}
                    />
                created<input type='radio' value='created' 
                    checked={radio === 'created'}
                    onChange={(e) => handleRadioChange(e)}
                    />

            <button type='button' onClick={handleFilter}>Filter</button>
        </div>
    )
}

export default FilterInput
