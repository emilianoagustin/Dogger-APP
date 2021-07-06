import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryDogs, getDogs, getTemperament, loading } from '../../actions/actions';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import SearchBox from './SearchBox/SearchBox';
import Pagination from './Pagination/Pagination';
import Dog from './Dog/Dog';
import Loading from '../Loading/Loading';
import './Home.css';

function Home() {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const temperaments = useSelector(state => state.temperaments);
    const isLoading = useSelector (state => state.isLoading);
    const [obj, setObj] = useState({
        name: '',
        filter: '',
        sort: '',
    });

    useEffect(() => {
        if(dogs.length === 0) {
            dispatch(loading())
            dispatch(getDogs())
        }
        if(temperaments.length === 0) dispatch(getTemperament())
    }, [dispatch, dogs, temperaments]);

    const handleInputChange = (e) => {
        setObj({...obj, [e.target.name]: e.target.value})
    };

    const handleSearch = () => {
        dispatch(loading())
        dispatch(queryDogs(obj))
        setObj({...obj, name: ''})
    }

    const handleFilter = () => {
        dispatch(loading())
        dispatch(queryDogs(obj))
        setObj({...obj, filter: ''})
    }

    const handleSort = () => {
        if(obj.sort === '') return;
        else {
            dispatch(loading())
            dispatch(queryDogs(obj));
            setObj({...obj, sort:''});
        }
    }

    return (
        <div className='container'>
            <SearchBox value={obj.name} onChange={handleInputChange} onClick={handleSearch}/>
            <Filter temperaments={temperaments} value={obj.filter} onChange={handleInputChange} onClick={handleFilter}/>
            <Sort onChange={handleInputChange} onClick={handleSort}/>
            {
                isLoading ? 
                <Loading/> :
                <Dog change={dogs}/>
            }
            <Pagination change={dogs}/>
        </div>
    )
}

export default Home
