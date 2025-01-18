import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import "../Styles/contact.css"

const Contact = () => {
  return (
    <div className='contact-element'>
      <div className='contact-cont'>
        <h2 className='heading'>Get in Touch</h2>
        
        <div className='part'>
          <p className='intro-text'>
          I’m dedicated to providing exceptional accounting services tailored to your unique needs. 
          Whether you're an individual seeking financial guidance or a business looking for comprehensive accounting solutions, 
          I'm here to help. Feel free to reach out.
            
          </p>

          <div className="contact-grid">
            <div className="contact-card email-card">
              <a 
                className='contact-link email'
                href="mailto:bonifacengare2017@gmail.com"
                aria-label="Email me"
              >
                <TfiEmail className='icon'/>
                <div className="contact-info">
                  <h3>Email</h3>
                  <span className='email-text'>bonifacengare2017@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="contact-card phone-card">
              <a 
                className="contact-link tel" 
                href="tel:+254728873078"
                aria-label="Call me"
              >
                <IoIosCall className='icon' />
                <div className="contact-info">
                  <h3>Phone</h3>
                  <span className='tel-text'>+254728873078</span>
                </div>
              </a>
            </div>

            <div className="contact-card location-card">
              <div className="contact-link">
                <MdLocationOn className='icon' />
                <div className="contact-info">
                  <h3>Location</h3>
                  <span>Eldoret, Kenya</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;