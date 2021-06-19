import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDog } from '../../actions/actions';

function Form() {
    const dispatch = useDispatch();

    const [newDog, setNewDog] = useState({
        name:'',
        height:'',
        weight:'',
        lifeSpan:'',
        temperament:''
    })

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(createDog(newDog));
        setNewDog({
            name:'',
            height:'',
            weight:'',
            lifeSpan:'',
            temperament:''
        })
    }

    const handleInputChange = (e) => {
        setNewDog({...newDog, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type='text' placeholder='name' name='name' value={newDog.name} onChange={handleInputChange}/>
                <input type='text' placeholder='height' name='height' value={newDog.height} onChange={handleInputChange}/>
                <input type='text' placeholder='weight' name='weight' value={newDog.weight} onChange={handleInputChange}/>
                <input type='text' placeholder='life span' name='lifeSpan' value={newDog.lifeSpan} onChange={handleInputChange}/>
                <input type='text' placeholder='temperament' name='temperament' value={newDog.temperament} onChange={handleInputChange}/>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default Form;
