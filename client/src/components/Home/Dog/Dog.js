import { React } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { paginate } from '../../../Utils';

function Dog({change}) {
    const pageNumber = useSelector(state => state.pageNumber);

    return (
        <div>
            {paginate(change, pageNumber, 8).map( (dog, i) => {
                return (
                    <div key={i}>
                        <ul>
                            <Link to={`/dogs/${dog.id || dog.ID}`}>
                                <li>{dog.name}</li>
                            </Link>
                            <li>{dog.temperament}</li>
                        </ul>
                        <img src={dog.image} alt='breed_dog_image'/>
                    </div>
                )
            })}
        </div>
    )
}

export default Dog
