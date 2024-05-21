import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
const Footer = () =>{

    return(
        <>
            <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about" id='about'>
                    <h2>About Us</h2>
                    <p>Welcome to Supercar Showcase! Your ultimate destination for all things supercar. Discover the latest in high-performance automotive excellence here.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><HashLink smooth to="/#home">Home</HashLink></li>
                        <li><HashLink smooth to="/#more">Explore</HashLink></li>
                        <li><HashLink smooth to="/#about">About</HashLink></li>
                        <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                    </ul>
                </div>
                <div className="footer-section social" id='contact'>
                    <h2>Follow Us</h2>
                    <div className="social-links">
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/bhavya-nathwani-15753b2a7" target="_blank" >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyrights &copy; 2024 Supercar Central. All rights reserved.</p>
            </div>
        </footer>
        </>
    )

}
export default Footer;