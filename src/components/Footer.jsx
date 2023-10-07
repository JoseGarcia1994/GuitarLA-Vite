import NavBar from "./NavBar";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container content'>
                <NavBar />
                <p className="copyright">All rights reserved { new Date().getFullYear()}.</p>
            </div>
        </footer>
    );
};

export default Footer;