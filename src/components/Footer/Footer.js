import './Footer.css';

const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <ul>
                    <li className="li-header">About Us</li>
                    <li>CiNE BEAR Ltd.</li>
                    <li>1612 Sofia, Bulgaria</li>
                    <li>phone: +359 888 123 123</li>
                    <li>email: info@cinebear.com</li>
                </ul>
                <ul>
                    <li className="li-header">Follow Us:</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
                <ul></ul>
            </div>
            <div className="footer-copyright">All Rights Reserved CiNE BEAR 2022 ©</div>
        </footer>
    );
}

export default Footer;