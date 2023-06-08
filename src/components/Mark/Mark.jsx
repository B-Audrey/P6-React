import './Mark.scss';
import star from '../../assets/star.png'

const Mark = ({rating}) => {
    return(
        <div>
            <img src={star} alt='mark stars'></img>
            <img src={star} alt='mark stars'></img>
            <img src={star} alt='mark stars'></img>
            <img src={star} alt='mark stars'></img>            
            <img src={star} alt='mark stars'></img>
        </div>
    )
}

export default Mark