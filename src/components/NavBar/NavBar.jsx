// import './NavBar.scss';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <header className="flex items-center w-full h-20  px-6 border-b-2">
            <img className='min-w-1/5 max-h-12' src="./assets/svg/logo.svg" alt="" srcset="" />
            <ul className="flex justify-end items-center w-full space-x-6">
                <li className='cursor-pointer p-2 font-bold hover:text-cyan-500'>Home</li>
                <li className='cursor-pointer p-2 font-bold hover:text-cyan-500'>Recovery</li>
                <li className='cursor-pointer p-2 font-bold hover:text-cyan-500'>Support</li>
                <li className='cursor-pointer p-2 font-bold hover:text-cyan-500'>Debuff</li>
                <li className='cursor-pointer p-2 font-bold hover:text-cyan-500'>About Us</li>
                <CartWidget/>
            </ul>
            
        </header>
    );
}

export default Navbar;