import { React } from 'react';
import Filter from './Filter/Filter';
import Order from './Order/Order';
import SearchBox from './SearchBox/SearchBox';
import Pagination from './Pagination/Pagination';
import Dog from './Dog/Dog';

function Home() {

    return (
        <div>
            <SearchBox/>
            <Filter/>
            <Order/>
            <Dog/>
            <Pagination/>
        </div>
    )
}

export default Home
