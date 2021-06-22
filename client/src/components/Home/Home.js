import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemperament, queryDogs } from '../../actions/actions';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import SearchBox from './SearchBox/SearchBox';
import Pagination from './Pagination/Pagination';
import Dog from './Dog/Dog';
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const temperaments = useSelector(state => state.temperaments);
    const [obj, setObj] = useState({
        name: '',
        filter: '',
        sort: '',
    });

    useEffect(() => {
        dispatch(getDogs());
        dispatch(getTemperament());
    }, []);
    
    useEffect(() => {
        dispatch(queryDogs(obj))
        setObj({...obj, sort:''})
    }, [obj.sort])
    

    const handleInputChange = (e) => {
        setObj({...obj, [e.target.name]: e.target.value})
    };

    const handleSearch = () => {
        dispatch(queryDogs(obj))
        setObj({...obj, name: ''})
    }

    const handleFilter = () => {
        dispatch(queryDogs(obj))
        setObj({...obj, filter: ''})
    }

    return (
        <div className='container'>
            <SearchBox value={obj.name} onChange={handleInputChange} onClick={handleSearch}/>
            <Filter temperaments={temperaments} value={obj.filter} onChange={handleInputChange} onClick={handleFilter}/>
            <Sort onChange={handleInputChange}/>
            <Dog change={dogs}/>
            <Pagination change={dogs}/>
        </div>
    )
}

export default Home
