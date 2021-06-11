import { React } from 'react';
import Breed from '../Breed/Breed';
import FilterInput from '../FilterInput/FilterInput';
import OrderInput from '../OrderInput/OrderInput';
import SearchInput from '../SearchInput/SearchInput';
import Pagination from '../Pagination/Pagination';

function Home() {

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
