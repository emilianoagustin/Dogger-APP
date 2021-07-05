import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDog, getTemperament } from '../../actions/actions';
import { selected, validate } from '../../Utils';
import { MdClose, MdCheck, MdCancel } from 'react-icons/md';
import './Form.css';

function Form() {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperaments);

    useEffect(() => {
        if(temperaments.length === 0){
            dispatch(getTemperament())
        }
    }, [dispatch, temperaments]);

    const [newDog, setNewDog] = useState({
        name: '',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
        minSpan: '',
        maxSpan: '',
        height: '',
        weight: '',
        lifeSpan: '',
        temperament:[]
    });
    const [errors, setErrors] = useState({});
    const [isActive, setIsActive] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
        if(!newDog.name || !newDog.minHeight || !newDog.maxHeight || !newDog.minWeight || !newDog.maxWeight){
            setIsActive(true);
            setIsSuccess(false);
            return;
        } 
        newDog.height = `${newDog.minHeight} - ${newDog.maxHeight}`
        newDog.weight = `${newDog.minWeight} - ${newDog.maxWeight}`
        newDog.lifeSpan = `${newDog.minSpan} - ${newDog.maxSpan} years`

        dispatch(createDog(newDog));
        if(newDog) {
            setIsActive(true);
            setIsSuccess(true);
        }
        setNewDog({
            name: '',
            minHeight: '',
            maxHeight: '',
            minWeight: '',
            maxWeight: '',
            minSpan: '',
            maxSpan: '',
            height: '',
            weight: '',
            lifeSpan: '',
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
                    <input type='text' className={errors.name ? 'danger' : ''} placeholder='Name' name='name' value={newDog.name} onChange={handleInputChange} />
                    
                    <div className='input-number'>
                        <input type='number' className={errors.minHeight ? 'danger' : ''} placeholder='Height - Min' name='minHeight' value={newDog.minHeight} onChange={handleInputChange} />
                        
                        <input type='number' className={errors.maxHeight ? 'danger' : ''} placeholder='Max' name='maxHeight' value={newDog.maxHeight} onChange={handleInputChange} />
                        
                    </div>
                    <div className='input-number'>
                        <input type='number' className={errors.minWeight ? 'danger' : ''} placeholder='Weight - Min' name='minWeight' value={newDog.minWeight} onChange={handleInputChange} />
                        
                        <input type='number' className={errors.maxWeight ? 'danger' : ''} placeholder='Max' name='maxWeight' value={newDog.maxWeight} onChange={handleInputChange} />
                        
                    </div>
                    <div className='input-number'>
                        <input type='number' placeholder='Life span from' name='minSpan' value={newDog.minSpan} onChange={handleInputChange}/>
                        <input type='number' placeholder='to' name='maxSpan' value={newDog.maxSpan} onChange={handleInputChange}/>
                    </div>
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
            <div className={`modal ${isActive ? 'show' : 'hidden'}`}>
                <div className="modal-content">
                    <span className="close" onClick={() => setIsActive(false)}><MdClose /></span>
                    {isSuccess ? <p className='success-submit'>Congrats! your dog was created successfully!<span className='success'><MdCheck /></span></p> : 
                    <p className='fail-submit'>Some of the fields are missing, please complete them before submitting again, thanks!<span className='cancel'><MdCancel /></span></p>}
                </div>
            </div>
        </div>
    )
}

export default Form;
