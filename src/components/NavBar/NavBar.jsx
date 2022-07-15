import './NavBar.scss';
import CardWidget from '../CardWidget/CardWidget';

const NavBar = () => {
    return (
        <header className="navbar">
            <h1 className="navbar__title">Store 🐣</h1>
            <ul className="navbar__list">
                <li>Home</li>
                <li>Recovery</li>
                <li>Support</li>
                <li>Debuff</li>
                <li>About Us</li>
                <CardWidget/>
            </ul>
        </header>
    );
}

export default NavBar;