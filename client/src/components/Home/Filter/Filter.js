import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getDogs } from '../../../actions/actions';
import './Filter.css';

function FilterInput({ temperaments, onChange, onClick, value }) {
    // const dispatch = useDispatch();

    // const [selected, setSelected] = useState('');
    // const [radio, setRadio] = useState('all')

    // const handleSelectChange = (e) => {
    //     setSelected(e.target.value)
    // }

    // const handleRadioChange = (e) => {
    //     setRadio(e.target.value)
    // }

    // const handleFilter = () => {
    //     dispatch(getDogs(selected, radio))
    //     setSelected('')
    // }

    return (
        <div className='filter-container'>
            <label htmlFor='temperaments'>
                Temperament
                <select name="temperaments" onChange={(e) => onChange(e.target.value)}>
                    <option value='none'>select a temperament...</option>
                        {temperaments.map( (t, i) => {
                            return (
                                <option key={i} value={t.name.toLowerCase()}>{t.name}</option>
                            )
                        })}
                </select>
            </label>
            <label className='filter-radio'>
                all
                <input type='radio' value='all' 
                    checked={value === 'all'}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
            <label className='filter-radio'>
                original
                <input type='radio' value='original' 
                    checked={value === 'original'}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
            <label className='filter-radio'>
                created
                <input type='radio' value='created' 
                    checked={value === 'created'}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
            <button type='button' onClick={onClick}>Filter</button>
        </div>
    )
}

export default FilterInput
