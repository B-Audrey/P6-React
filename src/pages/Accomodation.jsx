import '../styles/Accomodation.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tag from '../components/Tag/Tag';
import Collapse from '../components/Collapse';
import Mark from '../components/Mark/Mark';
import Host from '../components/Host/Host';
import Carousel from '../components/Carousel/Carousel';


const Accomodation = () => {  

  let [currentElement, setCurrentElement] = useState(null)
  let [haveCorrectId, setHaveCorrectId] = useState(null)
  const { refNumber } = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    const fetchData = async () => {
      try{
        let response = await fetch('../data.json');
        let dataToDisplay = await response.json();
        setCurrentElement(dataToDisplay.find( (element) => element.id === refNumber))
        console.log(currentElement)
        setHaveCorrectId(true)
      }
      catch(error){
        navigate('/error')
      }
    }
  fetchData()
  }, [])
  
  console.log(currentElement)
  
  useEffect( () => {
    if(currentElement === undefined){
      navigate('/error')
    }
  }, [haveCorrectId])
  
  
  console.log(currentElement)
  
  return currentElement ? (
    <>
    <Carousel pictures={currentElement.pictures}/>
    <div className='accomodation__presentation'>
      <div className='accomodation__titleBlock'>
        <h1 className='title'>{currentElement.title}</h1>
        <h2 className='location'>{currentElement.location}</h2>
        <ul className='tags'>
          {currentElement.tags.map( (current, index) =>
          <Tag key={`${index}-${current}`} tagText={current}/>
          )}
        </ul>
      </div>
      <div className='accomodation__hostBlock'>
        <Mark rating={currentElement.rating} />
        <Host name={currentElement.host.name} pictureUrl={currentElement.host.picture}/>
      </div>
    </div>
    <div className='informations'>
        <Collapse title='Description' textContent={currentElement.description}/>
        <Collapse title='Équipements' textContent={currentElement.equipments.map((current) => <span>{current}</span>)}/>
    </div>
    </> 
  ) : (
  <div>le logement demandé n'est pas disponible à l'affichage actuellement</div>)
}

export default Accomodation