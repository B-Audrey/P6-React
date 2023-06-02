import logo from '../assets/logoKasa.png';
import './Footer.css'

const Footer = () => {
   return (
    <>
        <footer>
            <img src={logo} className='header__logoKasa' alt='logo Kasa'></img>
            <p>© 2020 Kasa</p>
            <p>All rights reserved</p>
        </footer>
    </>
    )
}

export default Footer;