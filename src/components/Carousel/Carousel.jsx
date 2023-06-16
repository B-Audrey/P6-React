import './Carousel.scss';
import { useState } from 'react';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png'


const Carousel = ({pictures}) => {
    let [actualPictureIndex, setActualPictureIndex] = useState(0);
    let [actualNumber, setActualNumber] = useState(1);
    const hasSinglepicture = pictures.length === 1 ? true : false;

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
    return (
        <div className='carousel'>
            <img key={actualPictureIndex} src={pictures[actualPictureIndex]} alt='accomodation room' className='carousel__picture'></img>
            {hasSinglepicture ? (null
            ) : (
            <div className='carousel__navigation'>
                <div onClick={handlePreviousClick} className='carousel__previousClickBtn'><img src={leftArrow} alt='go to next' className='carousel__previousArrow'></img></div>
                <span className='carousel__counter'>{actualNumber} / {pictures.length}</span>
                <div onClick={handleNextClick} className='carousel__nextClickBtn'><img src={rightArrow} alt='go to next' className='carousel__nextArrow'></img></div>
            </div> 
            )}
        </div>
    )
}

export default Carousel