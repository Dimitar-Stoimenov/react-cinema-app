import './Header.css';

function Header() {

    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li className="nav-item" id="navLeftSide">
                    <a href="#">Program</a>
                    <a href="#">Offers</a>
                </li>
                {/* Home-Btn */}
                <li className="nav-item" id="nav-logo">
                    <a id="home-logo-wrapper" href="#">
                        <img id="home-logo"src='./logo.png'></img>
                    </a>
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
        </nav>
    );
}

export default Header;