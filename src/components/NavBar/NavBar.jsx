import './NavBar.scss';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header className="navbar">
            <img className='navbar__logo' src="./assets/svg/logo.svg" alt="" srcset="" />
            <ul className="navbar__list">
                <li>Home</li>
                <li>Recovery</li>
                <li>Support</li>
                <li>Debuff</li>
                <li>About Us</li>
                <CartWidget/>
            </ul>
        </header>
    );
}

export default NavBar;