import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './NavBar.css';

function NavBar() {

    const handleRefresh = () => { 
        if(window.location.href.includes('home')) {
            window.location.reload();
        }
    };

    return (
        <div className='navbar-container'>
            <Link to='/home' className='logo-img' onClick={handleRefresh}>
                <span></span>
            </Link>
            <Link to='/create_dog' className='btn-create'>
                <p>Create a dog</p>
            </Link>
        </div>
    )
}

export default NavBar
