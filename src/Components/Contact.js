import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import "../Styles/contact.css"
const Contact = () => {
  return (
    <div className='contact-element'>
    <div className='contact-cont' >
    <h2 className='heading'>05 Contact</h2>
    
      <div className='part'>
      <p className='paragraph-'>Need to talk or make inquiries on my work?</p>
      <div className="contact-container">
          <div className="contact-card email-card">
            <a 
              className='email'
              href="mailto:bonifacengare2017@gmail.com"
            >
              <TfiEmail  className='icon'/>
              <span className='email-text'>bonifacengare2017@gmail.com</span>
            </a>
          </div>
          <div className="contact-card phone-card">
            <a className="tel" href="tel:+254728873078"
            >
            <IoIosCall className='icon' />
            <span className='tel-text'>+254728873078</span>
            </a>
          </div>
          
        </div>
      </div>
        <div>
          
        </div>
    </div>
    </div>
  );
};

export default Contact;
