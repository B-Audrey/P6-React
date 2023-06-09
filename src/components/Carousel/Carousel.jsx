import './Carousel.scss';
import { useState } from 'react';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png'


const Carousel = ({pictures}) => {
    let [actualPictureIndex, setActualPictureIndex] = useState(0);
    let [actualNumber, setActualNumber] = useState(1);

    const handlePreviousClick = () => {
        if (actualPictureIndex >= 1) {
            actualPictureIndex --;
        }
        else if (actualPictureIndex === 0) {
            actualPictureIndex = pictures.length-1;
        }
        setActualPictureIndex(actualPictureIndex);
        setActualNumber(actualPictureIndex+1);
    }

    const handleNextClick = () => {
        if (actualPictureIndex < pictures.length-1 && actualPictureIndex >= 0) {
            actualPictureIndex ++;
        }
        else if (actualPictureIndex === pictures.length-1) {
            actualPictureIndex = 0;
        }
        setActualPictureIndex(actualPictureIndex);
        setActualNumber(actualPictureIndex+1);
    }

    return(
        <div>
            <button onClick={handlePreviousClick}><img src={leftArrow} alt='go to next'></img></button>
            <img key={actualPictureIndex} src={pictures[actualPictureIndex]} alt='carousel of pictures to describe accomodation'></img>
            <button onClick={handleNextClick}><img src={rightArrow} alt='go to next'></img></button>
            <span>{actualNumber} / {pictures.length}</span>
        </div>
    )
}

export default Carousel