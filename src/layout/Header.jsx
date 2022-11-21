import { NavLink } from 'react-router-dom'

import logo from '../assets/logo-header.png'
import '../css/style.css'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo de Kasa" className="header__logo" />
            <nav className="header__nav">
                <NavLink to="/" className="header__nav__homeBtn">Accueil</NavLink>
                <NavLink to="/about" className="header__nav__aboutBtn">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header
