import './Gallery.scss';
import { Link } from 'react-router-dom';
import data from '../../data.json';

const Gallery = () => {
    return (
        <div className='tagSection'>
            {data.map((current, index) => (
                <div key={`${index}-${current.id}`} className='tagSection__item'>
                    <Link to={`/accomodation/${current.id}`}>
                    <img src={current.cover} alt='cover' className='tagSection__img'></img>
                    <p className='tagSection__title'>{current.title}</p>
                    </Link>
                    </div>
            ))}
        </div>
    )
}

export default Gallery;