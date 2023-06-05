import Banner from '../components/Banner';
import img from '../assets/bannerImg.png';
import TagSection from '../components/TagSection/index';

const Home = () => {
    return (
      <>
        <h1>Page d'accueil</h1>
        <Banner img={img} text/>
        <TagSection />
      </>
    );
}

export default Home