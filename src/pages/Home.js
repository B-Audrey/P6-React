import Banner from '../components/Banner';
import img from '../assets/bannerImg.png';
import Items from '../components/Items/index';
// import data from '../data.json';
// import Accordion from '../components/Accordion/Accordion';



const Home = () => {
    return (
      <>
        <h1>Page d'accueil</h1>
        <Banner img={img} text/>
        <Items />
      </>
    );
}

export default Home