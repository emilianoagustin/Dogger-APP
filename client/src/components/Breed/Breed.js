import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../actions/actions';

function Breed() {
    const dogs = useSelector(state => state.dogs)
    console.log(dogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDogs())
    }, [])
    return (
        <div>
            {dogs.map( dog => {
                return (
                    <ul>
                        <li>{dog.name}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Breed
