import React from "react";
import "../Styles/experience.css"
function Experience(){
    return(
        <div className='experience'>
        <h2 className='heading'>Experience</h2>

        <div className='experience-entry'>
          <h4 className='experience-company'>BACE PARTNERS LLP</h4>
          <div className='experience-details'>
            <h3 className='experience-title'>Audit Assistant</h3>
            <p className='experience-date'>01/2024 – Present</p>
          </div>
          <h3>Key Responsibilities</h3>
          <ul className='accomplishments-list'>
            <li className='accomplishments'>Assisting in the planning and execution of audit procedures.</li>
            <li className='accomplishments'>Conducting tests of controls and substantive testing under supervision.</li>
            <li className='accomplishments'>Contributing to the preparation of audit reports and recommendations.</li>
          </ul>
        </div>

        <div className='experience-entry'>
          <h4 className='experience-company'>ELPRIS LTD</h4>
          <div className='experience-details'>
            <h3 className='experience-title'>Accounts Assistant</h3>
            <p className='experience-date'>04/2023 – 01/2024</p>
          </div>
          <h3>Key Responsibilities</h3>
          <ul className='accomplishments-list'>
            <li className='accomplishments'>Accurately recording financial transactions and maintaining records.</li>
            <li className='accomplishments'>Monitoring and managing accounts receivable, invoicing clients, and ensuring timely collection of payments.</li>
            <li className='accomplishments'>Preparing documents and ensuring compliance with KRA regulations.</li>
          </ul>
        </div>

        <div className='experience-entry'>
          <h4 className='experience-company'>ALEXANDRIA CANCER CENTRE AND PALLIATIVE CARE HOSPITAL</h4>
          <div className='experience-details'>
            <h3 className='experience-title'>Accounts Intern</h3>
            <p className='experience-date'>12/2022 – 03/2023</p>
          </div>
          <h3>Key Responsibilities</h3>
          <ul className='accomplishments-list'>
            <li className='accomplishments'>Assisting in entering financial data into accounting software.</li>
            <li className='accomplishments'>Reconciliation of bank statements with financial records.</li>
            <li className='accomplishments'>Maintaining up-to-date financial documentation for easy retrieval.</li>
          </ul>
        </div>

        <div className='experience-entry'>
          <h4 className='experience-company'>KENYA POWER AND LIGHTING COMPANY</h4>
          <div className='experience-details'>
            <h3 className='experience-title'>Industrial Attachment</h3>
            <p className='experience-date'>01/2020 – 04/2020</p>
          </div>
          <h3>Key Responsibilities</h3>
          <ul className='accomplishments-list'>
            <li className='accomplishments'>Entering financial data into accounting software.</li>
            <li className='accomplishments'>Maintaining accurate financial records for easy retrieval.</li>
            <li className='accomplishments'>Assisting with daily financial tasks and documentation.</li>
          </ul>
        </div>
      </div>
    )
}
export default Experience;