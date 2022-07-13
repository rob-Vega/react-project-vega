import './NavBar.css';

const NavBar = () => {
    return (
        <header className="navbar-container">
            <h1 className="navbar-title">Store 🐣</h1>
            <ul className="navbar-list">
                <li>Home</li>
                <li>Recovery</li>
                <li>Support</li>
                <li>Debuff</li>
                <li>About Us</li>
            </ul>
        </header>
    );
}

export default NavBar;