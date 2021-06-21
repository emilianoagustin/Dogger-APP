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
        mode: ''
    });
    
    useEffect(() => {
        dispatch(getDogs());
        dispatch(getTemperament())
    }, []);

    const handleSearch = () => {
        dispatch(queryDogs(obj))
        setObj({...obj, name: ''})
    }
    const handleFilter = () => {
        dispatch(queryDogs(obj))
        if(obj.filter === 'all' || obj.filter === 'original' || obj.filter === 'created') setObj({...obj})
        else setObj({...obj, filter: ''})
    }
    const handleSort = (e) => {
        console.log(e.target.value);
        dispatch(queryDogs(obj))
        setObj({...obj, sort: e.target.value})
    }
    console.log(obj);
    return (
        <div className='container'>
            <SearchBox value={obj.name} onChange={(value) => setObj({...obj, name: value})} onClick={handleSearch}/>
            <Filter temperaments={temperaments} value={obj.filter} onChange={(value) => setObj({...obj, filter: value})} onClick={handleFilter}/>
            <Sort onChange={(e) => handleSort(e)}/>
            <Dog change={dogs}/>
            <Pagination change={dogs}/>
        </div>
    )
}

export default Home
