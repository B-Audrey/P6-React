import './Banner.scss'

const Banner = (props) => {
    return(
        <div className='banner'>
            <div className='banner__text'>
                {props.text &&
                <>
                <p>Chez vous,&nbsp;</p>
                <p>partout et ailleurs</p>
                </>
                }
            </div>
            <img src={props.img} alt="Landscape and Sea" className='banner__image'/>
        </div>
    )
}

export default Banner