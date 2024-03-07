// HomePage.js

import React from 'react';
import AccountantImage from '../Assets/istockphoto-1495088043-612x612.jpg'; // Import your accountant image
import "../Styles/homepage.css"
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
const HomePage = () => {
  return (
    <>
    <section className="homepage" id="home">
      <div className="accountant-preview">
        
        <div className="preview-text">
          <p className='accountant-name'>👋🏾 Hello, <span>I'm Ngare Boniface.</span></p>
          <p className='paragraph-'>Dedicated and detail-oriented Accountant Assistant/Bookkeeper with a strong foundation in financial
management and a proven track record of accuracy and efficiency. Seeking to leverage my accounting
skills and meticulous attention to detail to contribute to a dynamic audit team as an Audit Assistant or
Audit Trainee
          </p>
          <p className='paragraph-'>
            Explore my portfolio to learn more about my work and achievements.
          </p>
          <div className='buttons'>
            <button className="contactButton">
              Get in Touch
              <div className="iconButton">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
            <button className="contactButton">
              Download CV
              <div className="iconButton">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <img src={AccountantImage} alt="Accountant" className="accountant-image" />
      </div>
      
    </section>
    <section id='about'>
      <About />
    </section>
    <section id='contact'>
      <Contact />
    </section>
    <section>
      <Footer />
    </section>
    </>

  );
};

export default HomePage;
