import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogById } from '../../actions/actions';

function Detail() {
    const { id }  = useParams();

    const dispatch = useDispatch();
    const dogDetails = useSelector(state => state.dogById);
    
    useEffect(() => {
        dispatch(getDogById(id))
    }, [dispatch]);

    return (
        <div>
            <h1>DETAIL PAGE</h1>
            <p>Name: {dogDetails.name}</p>
            <p>Temperament: {dogDetails.temperament}</p>
            <p>Height: {dogDetails.height}</p>
            <p>Weight: {dogDetails.weight}</p>
            <p>Life Span: {dogDetails.lifeSpan}</p>
            <img src={dogDetails.image} alt='image not found' />
        </div>
    )
}

export default Detail;
