import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "../Styles/about.css"
const About = () => {
  return (
    <div className="about-accountant">
      <h2 className='heading'>01 About Me</h2>
      <div className="accountant-details">
        
        <p className='about-paragraph'>
          I am a dedicated and experienced accountant based in Kenya. With a strong
          financial background, I provide top-notch accounting services to businesses
          and individuals.
        </p>
        <p className='about-paragraph'>In addition to my expertise in financial matters, I excel in various accounting software, including but not limited to QuickBooks, SAP, and Microsoft Excel. My meticulous attention to detail ensures accuracy in financial record-keeping, and my proficiency in financial analysis allows me to provide valuable insights into the financial health of the organizations I serve.</p>
        <p className='about-paragraph'>As an audit assistant, I have gained hands-on experience in conducting comprehensive financial audits and assessments. My role involves collaborating with audit teams to examine financial statements, internal controls, and compliance with regulatory standards. I am adept at identifying discrepancies and recommending corrective actions to enhance financial integrity.</p>
        <p className='about-paragraph'>Beyond my technical skills, I am known for my excellent communication and interpersonal abilities. Whether working independently or as part of a team, I am able to effectively convey complex financial information in a clear and understandable manner. I believe that open communication is essential for building trust with clients and stakeholders.</p>
        <p className='about-paragraph'>Overall, my dedication to excellence, coupled with my extensive experience and diverse skill set, makes me a valuable asset to any organization seeking a reliable and skilled accountant or audit assistant. I am passionate about contributing to the financial success of businesses and individuals, and I look forward to leveraging my expertise to drive positive outcomes for my clients.</p>
      </div>

      <div className="accountant-skills">
        <h2 className='heading'>02 Skills</h2>
        <ul className='skills'>
          <li className='skill'>Financial Reporting (Disclosure Requirement,Financial statements preparation and Internal contols)</li>
          <li className='skill'>Budgeting and Forecasting</li>
          <li className='skill'>Tax Planning</li>
          <li className='skill'>Auditing</li>
          <li className='skill'>Bookkeeping</li>
          <li className='skill'>Leadership (Decision Making, Delegation, Resilience, Integrity, Collaboration, Coaching and Development)</li>
          <li className='skill'>Ethical Judgement</li>
          <li className='skill'>Time Management</li>
          <li className='skill'>QuickBooks (Chart of accounts Management, Navigation, Bank Reconciliation and Data entry)</li>
        </ul>
      </div>
      
      <div className='experience'>
      <h2 className='heading'>03 Experience</h2>
      <div className='experience-entry'>
      <h4 className='experience-title'>BACE PARTNERS LLP</h4>
      <span className='employer'>
      <h3 className='experience-title'>AUDIT ASSISTANT</h3>
      
      <p className='experience-date'>01/2024 –  Present</p>
      </span>
      
      <h3>Key Resposibilities</h3>
      <ul className='accomplishments-list'>
        <li className='accomplishments'>Assisting in the planning and execution of audit procedures</li>
        <li className='accomplishments'>Conducting tests of controls and substantive testing under the supervision of senior auditors.</li>
        <li className='accomplishments'>Gathering and analyzing financial data and documents.</li>
        <li className='accomplishments'>Documenting audit procedures and findings.</li>
        <li className='accomplishments'>Communicating with clients to obtain necessary information and clarify audit issues.</li>
        <li className='accomplishments'>Contributing to the preparation of audit reports and recommendations.</li>
        <li className='accomplishments'>Adhering to auditing standards and regulatory requirements.</li>
        <li className='accomplishments'>Participating in meetings and discussions with audit team members and clients.</li>
        <li className='accomplishments'>Continuously learning and improving auditing skills and knowledge.</li>
      </ul>

      </div>
      <div className='experience-entry'>
      <h4 className='experience-title'>ELPRIS LTD</h4>
        <span className='employer'>
          <h3 className='experience-title'>ACCOUNTS ASSISTANT</h3>
       
          <p className='experience-date'>04/2023 – 01/2024</p>
        </span>
        <h3>Key Resposibilities</h3>
        <ul className='accomplishments-list'>
          <li className='accomplishments'>Accurately record financial transactions, including sales, purchases, expenses, and other financial activities.</li>
          <li className='accomplishments'>Monitoring and managing accounts receivable, invoicing clients, and ensuring timely collection of payments</li>
          <li className='accomplishments'>Monitoring and controlling expenses, identifying areas for cost savings and ensuring adherence to budgetary constraints.</li>
          <li className='accomplishments'>Utilize accounting software and tools to streamline financial processes and enhance efficiency.</li>
          <li className='accomplishments'>Maintaining organized and accurate financial records, both physical and electronic, for easy retrieval and reference.</li>
          <li className='accomplishments'>Assisting in preparing documents and information for tax filings, ensuring compliance with KRA regulations.</li>
        </ul>
      </div>
      <div className='experience-entry'>
      <h4 className='experience-title'>ALEXANDRIA CANCER CENTRE AND PALLIATIVE CARE HOSPITAL</h4>
        <span className='employer'>
        <h3 className='experience-title'>ACCOUNTS INTERN</h3>
        
        <p className='experience-date'>12/2022 – 03/2023</p>
        </span>
        <h3>Key Resposibilities</h3>
        <ul className='accomplishments-list'>
          <li className='accomplishments'>Assisted in entering financial data into accounting software and maintaining
            organized and accurate records of transactions.</li>
          <li className='accomplishments'>Support the reconciliation of bank statements with the company's financial
            records to ensure accuracy and identify any discrepancies.</li>
          <li className='accomplishments'>Assisted in maintaining organized and up-to-date financial documentation, both
            physical and electronic, for easy reference and retrieval.</li>
          <li className='accomplishments'>Conducted research on accounting and financial topics, assisting in the analysis
            of financial data to support decision-making processes.</li>
          <li className='accomplishments'>Worked collaboratively with other team members, departments, and external
            stakeholders, effectively communicating and contributing to the overall success
            of the accounting team.</li>
        </ul>
      </div>
      <div className='experience-entry'>
      <h4 className='experience-title'>KENYA POWER AND LIGHTING COMPANY</h4>
        <span className='employer'>
        <h3 className='experience-title'>INDUSTRIAL ATTACHEMENT</h3>
       
       <p className='experience-date'>01/2020 – 04/2020</p>
        </span>
        <h3>Key Resposibilities</h3>
        <ul className='accomplishments-list'></ul>
        <li className='accomplishments'>Assisted in entering financial data into accounting software and maintaining
          organized and accurate records of transactions.</li>
        <li className='accomplishments'>Maintaining organized and accurate financial records, both physical and electronic, for easy retrieval and reference.</li>
      </div>

    </div>
    <div className='education'>
      <h2 className='heading'>04 Education</h2>
      <div className="education-container">
        
        <div className="education-entry">
          <FontAwesomeIcon icon={faGraduationCap} size="3x" className="education-icon" />
          <div className="education-content">
            <h4 className='education-heading'>Jan 2018 - December 2023</h4>
            <h3 className='element-title'>Elgon View College</h3>
            <p className='element-paragraph'>Certified Public Accountants (CPA)</p>
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
      
    </div>
  );
};

export default About;
