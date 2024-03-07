// Footer.js
import React from 'react';

import '../Styles/footer.css';
import { Link as ScrollLink } from 'react-scroll';
const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode-footer' : 'light-mode-footer'}`}>
      <div className="footer-content">
          <div className="quick-links">
            <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={800}>
                Home 
              </ScrollLink>
              <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={800}>
                About
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={800}>
                Contact
              </ScrollLink>
          </div>
        <div className="personal-info-footer">
        <p className='contact-me'>© 2024 | All Rights Reserved</p>
        </div>
        <div className="social-links-footer">
          <p className='contact-me'>Developed with ❤️ by <a  className ="dev" href='https://jankim-portfolio.vercel.app/'>KIMUTAI JAN</a></p>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;