import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDog } from '../../actions/actions';
import { selected, validate } from '../../Utils';
import './Form.css';

function Form() {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);
    const [newDog, setNewDog] = useState({
        name:'',
        height:'-',
        weight:'-',
        lifeSpan:'',
        temperament:[]
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const validateObj = validate({
            ...newDog,
            [e.target.name]: e.target.value
        });
        setErrors(validateObj);
        setNewDog({...newDog, [e.target.name]: e.target.value});
    };

    const handleSelected = (e) => {
        let values = e.target.options;
        setNewDog({
            ...newDog,
            temperament: selected(values)
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(createDog(newDog));
        setNewDog({
            name:'',
            height: '-',
            weight: '-',
            lifeSpan:'',
            temperament:[]
        });
    };

    return (
        <div className='container'>
            <div className='form-title'>
                <h1>Create your own dog</h1>
            </div>
            <div className='form-container'>
                <form onSubmit={handleOnSubmit}>
                    <input type='text' placeholder='Name' name='name' value={newDog.name} onChange={handleInputChange} required/>
                    {errors.name && (<p>{errors.name}</p>)}
                    <input type='text' placeholder='Height' name='height' value={newDog.height} onChange={handleInputChange} required/>
                    {errors.height && (<p>{errors.height}</p>)}
                    <input type='text' placeholder='Weight' name='weight' value={newDog.weight} onChange={handleInputChange} required/>
                    {errors.weight && (<p>{errors.weight}</p>)}
                    <input type='text' placeholder='Life span' name='lifeSpan' value={newDog.lifeSpan} onChange={handleInputChange}/>
                    <select className='form-select' multiple name="temperament" onChange={handleSelected}>
                        <option value=''>select a temperament...</option>
                            {temperaments.map( (t, i) => {
                                return (
                                    <option key={i} value={t.name.toLowerCase()}>{t.name}</option>
                                )
                            })}
                    </select>
                    <p>You can choose more than one temperament by pressing Ctrl (windows) or Command (Mac)</p>
                    <button type='submit'>CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
