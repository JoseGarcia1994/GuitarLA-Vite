import { Link } from 'react-router-dom';
import logo from '../../public/img/logo.svg';
import NavBar from './NavBar';

const Header = () => {

    return (
        <div className="header">
            <div className="container bar">
                <Link to='/'>
                    <img src={logo} alt="logo" className='logo' />
                </Link>
                <NavBar />
            </div>
        </div>
    );
};

export default Header;