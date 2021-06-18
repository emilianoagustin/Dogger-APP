import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, getTemperament } from '../../actions/actions';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import SearchBox from './SearchBox/SearchBox';
import Pagination from './Pagination/Pagination';
import Dog from './Dog/Dog';

function Home() {
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.dogs);
    const breedResults = useSelector(state => state.dogsByName);
    const temperaments = useSelector(state => state.temperaments);
    const [change, setChange] = useState(dogs);

    useEffect(() => {
            dispatch(getDogs());
            dispatch(getTemperament())
    }, []);

    useEffect(() => {
        if(change === dogs) return setChange(breedResults)
        else return setChange(dogs)
    }, [breedResults, dogs]);

    return (
        <div>
            <SearchBox/>
            <Filter temperaments={temperaments}/>
            <Sort/>
            <Dog change={change}/>
            <Pagination change={change}/>
        </div>
    )
}

export default Home
