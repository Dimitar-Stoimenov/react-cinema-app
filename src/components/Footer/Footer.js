import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';

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
                    {/* <li className="li-header">About Us</li> */}
                    <li className="li-header">CiNE BEAR Ltd.</li>
                    <li>1612 Sofia, Bulgaria</li>
                    <li>phone: +359 888 123 123</li>
                    <li>email: info@cinebear.com</li>
                </ul>
                <div className="footer-section">
                    <ul className="wrapper">
                        <a href="https://facebook.com/bear-cinema" target="_blank" rel="noreferrer" className="icon facebook">
                            <span className="tooltip">Facebook</span>
                            <span><FaFacebookF className="fab fa-facebook-f" /></span>
                        </a>
                        <a href="https://twitter.com/bear-cinema" target="_blank" rel="noreferrer" className="icon twitter">
                            <span className="tooltip">Twitter</span>
                            <span><FaTwitter className="fab fa-twitter" /></span>
                        </a>
                        <a href="https://instagram.com/bear-cinema" target="_blank" rel="noreferrer" className="icon instagram">
                            <span className="tooltip">Instagram</span>
                            <span><FaInstagram className="fab fa-instagram" /></span>
                        </a>
                        <a href="https://github.com/dimitar-stoimenov" target="_blank" rel="noreferrer" className="icon github">
                            <span className="tooltip">Github</span>
                            <span><FaGithub className="fab fa-github" /></span>
                        </a>
                        <a href="https://youtube.com/bear-cinema" target="_blank" rel="noreferrer" className="icon youtube">
                            <span className="tooltip">Youtube</span>
                            <span><FaYoutube className="fab fa-youtube" /></span>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">All Rights Reserved CiNE BEAR 2022 ©</div>
        </footer>
    );
}

export default Footer;