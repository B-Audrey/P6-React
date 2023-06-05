import './Tag.scss';
import { Link } from 'react-router-dom'

const Tag = ({title, image, accId}) => {
    const accomodationToDisplay = '/accomodation/' + accId;
    return (
        <>
            <div className='tag'>
                <Link to={accomodationToDisplay}>
                    <img src={image} alt="accomdation room" className='tag__picture'/>
                    <p className='tag__title'>{title && {title}}</p>
                </Link>
            </div>
        </>
    )
}

export default Tag;