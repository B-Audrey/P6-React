import logo from '../assets/logoKasa.png';
import '../styles/Header.css'

const Header = () => {
   return (
   <header className='header'>
        <img src={logo} className='header__logoKasa' alt='logo Kasa'></img>
        <nav className='header__nav'>
            <a href="#accueil" className='header__nav--accueil'>Accueil</a>
            <a href="#aPropos" className='header__nav--aPropos'>A Propos</a>
        </nav>
    </header>)
}

export default Header;