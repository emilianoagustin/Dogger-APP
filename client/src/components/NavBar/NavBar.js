import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className='navbar-container'>
            <Link to='/home' className='logo-img'>
                <span></span>
            </Link>
            <Link to='/create_dog' className='btn-create'>
                <p>Create a dog</p>
            </Link>
        </div>
    )
}

export default NavBar
