import { React, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogById } from '../../actions/actions';
import './Detail.css';

function Detail() {
    const { id }  = useParams();

    const dispatch = useDispatch();
    const dogDetails = useSelector(state => state.dogById);
    
    useEffect(() => {
        dispatch(getDogById(id))
    }, [id]);

    return (
        <div className='container'>
            <div className='detail-section'>
                <div className='detail-info'>
                    <h1>{dogDetails.name}</h1>
                    <p>Temperament: {dogDetails.temperament}</p>
                    <p>Height: {dogDetails.height}</p>
                    <p>Weight: {dogDetails.weight}</p>
                    <p>Life Span: {dogDetails.lifeSpan}</p>
                </div>
                <div className='detail-img'>
                    <img src={dogDetails.image} alt='image not found' />
                </div>
            <Link to='/home' className='btn-back'>
                <p>BACK</p>
            </Link>
            </div>
        </div>
    )
}

export default Detail;
