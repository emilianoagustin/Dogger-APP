import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogById } from '../../actions/actions';

function Detail() {
    const { id }  = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const dogDetails = useSelector(state => state.dogById);
    
    useEffect(() => {
        dispatch(getDogById(id))
    }, [dispatch]);
    console.log(dogDetails);
    //generar condicional para filtrar datos por api o db

    return (
        <div>
            <h1>DETAIL PAGE</h1>
            {/* <p>{dogDetails.name}</p>
            <p>{dogDetails.temperament}</p>
            <p>{dogDetails.height.metric}</p>
            <p>{dogDetails.weight.metric}</p>
            <img src={dogDetails.image.url} alt='image not found' /> */}

        </div>
    )
}

export default Detail;
