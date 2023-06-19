import './Collapse.scss';
import { useState } from 'react';
import chevron from '../../assets/chevron.png';

const Collapse = ({title, textContent}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClick = () => setIsOpen((previousValue) => !previousValue );

    return (
        <div className='collapse'>
            <div className='collapse__banner'>
                <p className='collapse__title'>{title}</p>
                <button onClick={handleClick} className={`collapse__chevron${isOpen? '--open' : ''}`}>
                    <img src={chevron} alt='click here top open or close'></img>
                </button>
            </div>
            {isOpen && (
                <div className='collapse__content'>
                <p className={`collapse__content${isOpen? '--open' : '--close'}`}>{textContent}</p>
            </div>
            )}
        </div>
    )
}

export default Collapse