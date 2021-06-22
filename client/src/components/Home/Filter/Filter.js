import React from 'react';
import './Filter.css';

function Filter({ temperaments, onChange, onClick, value }) {

    return (
        <div className='filter-container'>
            <label htmlFor='temperaments'>
                Temperament
                <select name="filter" onChange={(e) => onChange(e)}>
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
                <input name="filter" type='radio' value='all' 
                    checked={value === 'all'}
                    onChange={(e) => onChange(e)}
                />
            </label>
            <label className='filter-radio'>
                original
                <input name="filter" type='radio' value='original' 
                    checked={value === 'original'}
                    onChange={(e) => onChange(e)}
                />
            </label>
            <label className='filter-radio'>
                created
                <input name="filter" type='radio' value='created' 
                    checked={value === 'created'}
                    onChange={(e) => onChange(e)}
                />
            </label>
            <button type='button' onClick={onClick}>Filter</button>
        </div>
    )
}

export default Filter;
