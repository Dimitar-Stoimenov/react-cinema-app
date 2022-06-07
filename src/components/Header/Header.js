import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { parseDate } from '../../utils/utils';
import './Header.css';

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const today = parseDate(new Date());

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
                    <Link to={"/projections/program/" + today} onClick={() => window.scrollTo(0, 0)}>Program</Link>
                    <Link to="#">Offers</Link>
                </li>
                <li className={scrollPosition >= 48 ? "nav-item scrolled-logo-wrapper" : "nav-item scrolled-logo-wrapper hidden"}>
                    <Link to="/" id="scrolled-logo" onClick={() => window.scrollTo(0, 0)}>BEAR CINEMA</Link>
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