import './Header.css';
import { useEffect, useState } from 'react';


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
                    <a href="#">Program</a>
                    <a href="#">Offers</a>
                </li>
                <li className={scrollPosition >= 48 ? "nav-item scrolled-logo-wrapper" : "nav-item scrolled-logo-wrapper hidden"}>
                    <a id="scrolled-logo" href="#">BEAR CINEMA</a>
                </li>
                {/* Logged-in users */}
                <li className="nav-item" id="user">
                    <a href="#">My Profile</a>
                    <a href="#">Logout</a>
                </li>
                {/* Guest users */}
                {/* <li className="nav-item" id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </li> */}
            </ul>
            <a className={scrollPosition < 48 ? "nav-logo-wrapper" : "nav-logo-wrapper hidden"} href="#">
                <img id="home-logo" src='./logo.png'></img>
            </a>
        </>
    );
}

export default Header;