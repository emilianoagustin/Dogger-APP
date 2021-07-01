import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDogs, getTemperament } from '../../actions/actions';
import './Landing.css';

function Landing() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogs());
        dispatch(getTemperament());
    }, []);

    return (
        <div className='landing-container'>
            <div className='landing-section'>
                <h1>Welcome to Dogger</h1>
                <p>Find and know all about your favorite dogs
                </p>
                <Link to='/home'>
                    <button className='landing-button'><span>let's get started!</span></button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;
