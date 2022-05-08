import './Header.css';

function Header() {

    return (
        <>
            <ul className="nav-list">
                <li className="nav-item" id="navLeftSide">
                    <a href="#">Program</a>
                    <a href="#">Offers</a>
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
            <a className="nav-logo-wrapper" href="#">
                <img id="home-logo" src='./logo.png'></img>
            </a>
        </>
    );
}

export default Header;