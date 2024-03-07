import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import "../Styles/contact.css"
const Contact = () => {
  return (
    <div className='contact-element'>
    <h3 className='heading'>Get In Touch</h3>
    <h3 className='heading'>Need to talk or make inquiries on my work?</h3>
      <div className="contact-container">
          
          
          <div className="contact-card email-card">
            <TfiEmail  className='icon'/>
            <p>
              <a href="mailto:bonifacengare2017@gmail.com">bonifacengare2017@gmail.com</a>
            </p>
          </div>
          <div className="contact-card phone-card">
            <IoIosCall className='icon' />
            <p>+254728873078</p>
          </div>
          
        </div>
    </div>
  );
};

export default Contact;
