import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h1>LANDING PAGE</h1>
            <Link to='/dogs'>
                <button>let's get started</button>
            </Link>
        </div>
    )
}

export default Landing;
