import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../Styles/navbar.css'; // Import your CSS file
import logo from '../Assets/DEV-KIMUTAI (1).png';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };
  
  function home(){
    navigate("/")

  }

  return (
    <nav>
      {/* Navigation for Large Screens */}
      <div className="nav-large">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={home} />
        </div>

        <div className="menu-center">
          {/* Centered Navigation Links */}
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
      </div>

      <div className="nav-small">
      <div className="logo">
          <img src={logo} alt="Logo" onClick={home} />
        </div>
        <button className="menu-toggle" onClick={handleToggleMenu}>☰</button>
        
        <ul className={isMenuOpen ? 'menu-list open' : 'menu-list'}>
        <li>
            <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={800} onClick={handleMenuItemClick}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={800} onClick={handleMenuItemClick}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={800} onClick={handleMenuItemClick}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;