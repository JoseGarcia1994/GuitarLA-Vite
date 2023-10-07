import { Link, useLocation } from 'react-router-dom';
import CartImg from '../../public/img/carrito.png'

const NavBar = () => {

    const location = useLocation();
    
    return (
        <nav className="navegation">
            <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
            >Home</Link>
            <Link
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
            >About</Link>
            <Link
                to="/store"
                className={location.pathname === '/store' ? 'active' : ''}
            >Store</Link>
            <Link
                to="/blog"
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
            <Link
                to="/cart"
            >
                <img src={CartImg} alt="cart" />
            </Link>
        </nav>
    );
};

export default NavBar;