import './Host.scss';


const Host = ({name, pictureUrl}) => {
    return(
        <div>
           <p>{name}</p>
           <img src={pictureUrl} alt='owner profile'></img>
        </div>
    )
}

export default Host