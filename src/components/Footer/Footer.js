import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const location = useLocation();

    if (location.pathname.match('/projections/program')) {
        // CONTINUE
    } else if (location.pathname.match('/projections')) {
        return null;
    }

    return (
        <footer>
            <div className="footer-content">
                <ul className="footer-section">
                    <li className="li-header">About Us</li>
                    <li>CiNE BEAR Ltd.</li>
                    <li>1612 Sofia, Bulgaria</li>
                    <li>phone: +359 888 123 123</li>
                    <li>email: info@cinebear.com</li>
                </ul>
                <ul className="footer-section">
                    <li className="li-header">Follow Us:</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                    <li>LinkedIn</li>
                </ul>
                <ul></ul>
            </div>
            <div className="footer-copyright">All Rights Reserved CiNE BEAR 2022 ©</div>
        </footer>
    );
}

export default Footer;