import logo from '../assets/logoKasa.png';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
    <>
        <header className='header'>
            <img src={logo} className='header__logoKasa' alt='logo Kasa'></img>
            <nav className='header__nav'>
                <Link to="/" className='header__nav--accueil'>Accueil</Link>
                <Link to="/about" className='header__nav--aPropos'>A Propos</Link>
            </nav>
        </header>
    </>
    )
}

export default Header;