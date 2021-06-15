import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Link to='/dogs'>
                <p>HOME</p>
            </Link>
            <Link to='/dog'>
                <p>CREATE</p>
            </Link>
        </div>
    )
}

export default NavBar
