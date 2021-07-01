import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDogs, getTemperament } from '../../actions/actions';
import './NavBar.css';

function NavBar() {
    const dispatch = useDispatch();

    const handleRefresh = () => { 
        if(window.location.href.includes('home')) {
            window.location.reload();
        }
        dispatch(getDogs());    
        dispatch(getTemperament());    
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
