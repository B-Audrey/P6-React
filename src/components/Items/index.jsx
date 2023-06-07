import './Items.scss';
import data from '../../data.json';
import { Link } from 'react-router-dom';


const Items = () => {
    console.log(data)
    return (
        <div className='tagSection'>
            {data.map((current, index) => (
                <div key={`${index}-${current.id}`} className='tagSection__item'>
                    <Link to={`/accomodation/${current.id}`}>
                    <img src={`${current.cover}`} alt='cover' className='tagSection__img'></img>
                    <h4 className='tagSection__title'>{current.title}</h4>
                    </Link>
                    </div>
            ))}
        </div>
    )
}

export default Items;