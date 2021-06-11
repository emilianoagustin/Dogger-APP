import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../actions/actions';
import Breed from '../Breed/Breed';
import FilterInput from '../FilterInput/FilterInput';
import OrderInput from '../OrderInput/OrderInput';
import SearchInput from '../SearchInput/SearchInput';
import Pagination from '../Pagination/Pagination';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDogs())
    }, [])
    return (
        <div>
            <SearchInput/>
            <FilterInput/>
            <OrderInput/>
            <Breed/>
            <Pagination/>
        </div>
    )
}

export default Home
