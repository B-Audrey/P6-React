import './Collapse.scss';
import { useState } from 'react';
import chevron from '../../assets/chevron.png';

const Collapse = (props) => {
    let [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        console.log('je clique');
        if (!isOpen) {
            setIsOpen(isOpen = true);
        } else {
            setIsOpen(isOpen = false);
        }
        console.log(isOpen)
    }

    return (
        <div className='collapse'>
            <div className='collapse__banner'>
                <p className='collapse__title'>{props.title}</p>
                <button onClick={handleClick} className='collapse__chevron'>
                    <img src={chevron} alt='click here top open or close'></img>
                </button>
            </div>
            {isOpen && (<div className='collapse__content'>
                <p>{props.textContent}</p>
            </div>)}

        </div>
    )
}

export default Collapse