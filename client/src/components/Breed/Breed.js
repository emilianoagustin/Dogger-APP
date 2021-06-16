import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../actions/actions';

function Breed() {
    const dispatch = useDispatch();
    
    const dogs = useSelector(state => state.dogs);
    const breedResults = useSelector(state => state.dogsByName);
    // const [shown, setShown] = useState([]);

    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch]);

    // useEffect(() => {
    //     if(breedResults) setShown(breedResults)
    //     else setShown(dogs)
    // }, [breedResults])
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
                            <Link to={`/dogs/${dog.id || dog.ID}`}>
                                <li>{dog.name}</li>
                            </Link>
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
