import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../../actions/actions';
import { paginate } from '../../../Utils';

function Dog() {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const breedResults = useSelector(state => state.dogsByName);
    const pageNumber = useSelector(state => state.pageNumber);
    const [change, setChange] = useState(dogs);

    useEffect(() => {
        dispatch(getDogs())
    }, []);

    useEffect(() => {
        if(change === dogs) return setChange(breedResults)
        else return setChange(dogs)
    }, [breedResults, dogs]);

    return (
        <div>
            {paginate(change, pageNumber, 8).map( (dog, i) => {
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

export default Dog
