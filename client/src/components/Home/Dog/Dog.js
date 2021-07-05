import { React } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { paginate } from '../../../Utils';
import { DOG_DEFAULT_IMAGE } from '../../../constants';
import './Dog.css';


function Dog({change}) {
    const pageNumber = useSelector(state => state.pageNumber);

    return (
        <div className='dog-container'>
            {paginate(change, pageNumber, 8).map( (dog, i) => {
                return (
                    <div key={i} className='dog-card'>
                        <h2>{dog.name}</h2>
                        <p>{!dog.flag ? dog.temperaments.map(t => t.name).join(', ') : dog.temperament}</p>
                        <img className='dog-card-img' src={dog.image ? dog.image : DOG_DEFAULT_IMAGE} alt='breed_dog_image'/>
                        <Link to={`/dogs/${dog.id || dog.ID}`} style={{ textDecoration: 'none' }}>
                            <span>more details</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Dog;
