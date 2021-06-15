import { React } from 'react';
import Breed from '../Breed/Breed';
import Filter from './Filter/Filter';
import Order from './Order/Order';
import SearchBox from './SearchBox/SearchBox';
import Pagination from './Pagination/Pagination';

function Home() {

    return (
        <div>
            <SearchBox/>
            <Filter/>
            <Order/>
            <Breed/>
            <Pagination/>
        </div>
    )
}

export default Home
