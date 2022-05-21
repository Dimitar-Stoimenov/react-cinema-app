import './Header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <ul className="nav-list">
                <li className="nav-item" id="navLeftSide">
                    <Link to="#">Program</Link>
                    <Link to="#">Offers</Link>
                </li>
                <li className={scrollPosition >= 48 ? "nav-item scrolled-logo-wrapper" : "nav-item scrolled-logo-wrapper hidden"}>
                    <Link id="scrolled-logo" to="/">BEAR CINEMA</Link>
                </li>
                {/* Logged-in users */}
                <li className="nav-item" id="user">
                    <Link to="#">My Profile</Link>
                    <Link to="#">Logout</Link>
                </li>
                {/* Guest users */}
                {/* <li className="nav-item" id="guest">
                    <Link to="#">Login</Link>
                    <Link to="#">Register</Link>
                </li> */}
            </ul>
            <Link className={scrollPosition < 48 ? "nav-logo-wrapper" : "nav-logo-wrapper hidden"} to="/">
                <img id="home-logo" src='/logo.png' alt='logo'></img>
            </Link>
        </>
    );
}

export default Header;