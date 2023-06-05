import Banner from '../components/Banner';
import img from '../assets/bannerImg.png';

const Home = () => {
    return (
      <>
        <h1>Page d'accueil</h1>
        <Banner img={img} text/>
      </>
    );
}

export default Home