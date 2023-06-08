import '../styles/Accomodation.scss';
import { useParams } from 'react-router-dom';
import Tag from '../components/Tag/Tag';
import data from '../data.json';
import Collapse from '../components/Collapse';
import Mark from '../components/Mark/Mark';
import Host from '../components/Host/Host';

console.log(data)

const Accomodation = () => {
  const { refNumber } = useParams();
  const accomodationIndex = data.findIndex( (element) => element.id === `${refNumber}`);
  const currentAccomodation = data[accomodationIndex];
  const tags = currentAccomodation.tags
  
  return (
    <>
    <h1 className='title'>{currentAccomodation.title}</h1>
    <h2 className='location'>{currentAccomodation.location}</h2>
    <ul className='tags'>
      {tags.map( (current, index) =>
        <Tag key={`${index}-${current}`} tagText={current}/>
      )}
    </ul>
    <div className='informations'>
        <Collapse title='Description' textContent={currentAccomodation.description}/>
        <Collapse title='Équipements' textContent={currentAccomodation.equipments.map((current) => <span>{current}</span>)}/>
    </div>
    <Mark rating={2} />
    <Host name={currentAccomodation.host.name} pictureUrl={currentAccomodation.host.picture}/>
    </>
  )
}

export default Accomodation