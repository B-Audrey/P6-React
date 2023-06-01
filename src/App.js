import Header from './components/Header';
import './App.css';
import Tag from './components/Tag';

const getData = async () => {
  const data = await fetch('./data.json');
  return data.json();
}

const logments = await getData();
console.log(logments)

const App = () => {
  return (
    <>
    <Header />
    <Tag name={logments[0].tags} age='26'/>
    <Tag name='tata'/>
    </>
  );
}

export default App;
