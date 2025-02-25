import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AccountantImage from '../Assets/VIS_2710.jpg1.jpg';
import "../Styles/homepage.css"
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

const HomePage = () => {
  

  return (
    <>
      <section className="homepage" id="home">
        <div className="background-animation">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="accountant-preview">
        
        <div className="preview-text">
          <p className='accountant-name'>👋🏾 Hello, <span>I'm Ngare Boniface.</span></p>
          <p className='paragraph-'> I offer a range of services, including financial reporting, tax preparation, auditing, bookkeeping, and financial analysis. 
            My goal is to help clients reach their financial objectives while staying compliant with all relevant regulations. I’m passionate about making finance understandable and accessible, so you can focus on what you do best!
          </p>
          <p className='paragraph-'>
            Explore my portfolio to learn more about my work and achievements.
          </p>
          <div className='buttons'>
            <ScrollLink className="contactButton primary" to="contact" spy={true} smooth={true} offset={-70} duration={800}>
            Get in Touch
          </ScrollLink>
          <a 
            className="contactButton secondary" 
            href="https://drive.google.com/file/d/1Tc7WSTmVePrAAstFf6Gjrg53ORcvgiDU/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer">
            Download CV
          </a>
          </div>
        </div>
        <div className='image-holder'>
        <img src={AccountantImage} alt="Accountant" className="accountant-image" />
        </div>
      </div>
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;

