import '../styles/Accomodation.scss'
import { useParams } from 'react-router-dom'

const Accomodation = () => {

  const { refNumber } = useParams()

    return (
      <>
      <h1>Je suis dans la page des logements</h1>
      <p>J'affiche le logement numéro {refNumber} </p>
      </>
    );
}

export default Accomodation