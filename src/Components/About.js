import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons';
import "../Styles/about.css"
import Experience from './Experience';
import Skills from './Skills';
const About = () => {
  return (
    <div className="about-accountant">
      <h2 className='heading'>About Me</h2>
      <div className="accountant-details">
        <p className='about-paragraph'>
          I am a dedicated accountant based in Kenya, offering top-notch accounting services with expertise in QuickBooks, SAP, and Microsoft Excel. My meticulous attention to detail ensures accuracy in financial record-keeping, while my proficiency in financial analysis provides valuable insights into organizational health. With hands-on experience as an audit assistant, I excel in conducting audits, examining financial statements, and ensuring compliance with regulatory standards. Known for my communication and interpersonal skills, I effectively convey complex financial information and foster trust with clients. My diverse skill set and commitment to excellence make me a reliable asset for businesses and individuals seeking financial success.
        </p>
      </div>
      <Skills />
      <Experience />
      <div className='education'>
        <h2 className='heading'>Education & Certifications</h2>
        <div className="education-container">
          <div className="certification-entry">
            <FontAwesomeIcon icon={faCertificate} size="3x" className="certification-icon" />
            <div className="certification-content">
              <h4 className='certification-heading'>Jan 2018 - December 2023</h4>
              <h3 className='certification-title'>Elgon View College</h3>
              <p className='certification-paragraph'>Certified Public Accountants (CPA)</p>
            </div>
          </div>
          <div className="education-entry">
            <FontAwesomeIcon icon={faGraduationCap} size="3x" className="education-icon" />
            <div className="education-content">
              <h4 className='education-heading'>May 2017 - December 2021</h4>
              <h3 className='element-title'>Kabarak University</h3>
              <p className='element-paragraph'>Bachelor of Business Management and Information Technology</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2 className="heading">Testimonials</h2>
        <div className="testimonials-container">
        <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">
                "His expertise in auditing and financial analysis has been crucial for our organization. Always reliable, thorough, and professional in his approach."
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">CPA Joseph Kiema</h4>
                <p className="author-title">Senior Consultant, BACE PARTNERS LLP</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">
                "An exceptional accountant who transformed our financial processes. Their attention to detail and strategic insights have been invaluable to our business growth."
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">Kiprono Sawe</h4>
                <p className="author-title">CEO, ELPRIS LTD</p>
              </div>
            </div>
          </div>


          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">
                "He is an exceptional accountant with a remarkable ability to transform financial processes. His dedication, attention to detail, and insightful strategic guidance have been invaluable to our business growth."
              </p>
              <div className="testimonial-author">
                <h4 className="author-name">CPA Bethwel Kirwa</h4>
                <p className="author-title">Auditor, BACE PARTNERS LLP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
