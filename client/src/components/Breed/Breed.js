import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../actions/actions';

function Breed() {
    
    const dogs = useSelector(state => state.dogs);
    // resultado de busqueda por raza
    // const breedResults = useSelector(state => state.searchDogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch]);

        let n = 8;
        let eightArr = dogs.slice(0, n).map( d => {
            return d
        })

    return (
        <div>
            {eightArr.map( (dog, i) => {
                return (
                    <div key={i}>
                        <ul>
                            <li>{dog.name}</li>
                            <li>{dog.temperament}</li>
                        </ul>
                        <img src={dog.image} alt='breed_dog_image'/>
                    </div>
                )
            })}
        </div>
    )
}

export default Breed
