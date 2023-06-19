import Banner from '../components/Banner';
import img from '../assets/bannerImg.png';
import Gallery from '../components/Gallery/index';
import { useState, useEffect } from 'react';

const Home = () => {

  let [data, setData] = useState({});
  let [haveData, setHaveData] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        let response = await fetch('./data.json');
        let dataToDisplay = await response.json();
        setData(dataToDisplay);
        setHaveData(data=true)
      }
      catch(error){
        console.error(error)
      }
    }
  fetchData()
  }, [])

  console.log(data)

    return (
      <>
        <Banner img={img} text/>
        { haveData ? <Gallery data={data}/> : null }
      </>
    );
}

export default Home