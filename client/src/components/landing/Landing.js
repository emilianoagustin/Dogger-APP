import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
    return (
        <div className='landing-container'>
            <div className='landing-section'>
                <h1>Welcome to Dogger</h1>
                <p>Find and know all about your favorite dogs
                </p>
                <Link to='/home'>
                    <button>let's get started!</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;
