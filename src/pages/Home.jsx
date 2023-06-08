import Banner from '../components/Banner';
import img from '../assets/bannerImg.png';
import Gallery from '../components/Gallery/index';

const Home = () => {
    return (
      <>
        <Banner img={img} text/>
        <Gallery />
      </>
    );
}

export default Home