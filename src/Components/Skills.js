import React from "react";
import { FaFileAlt, FaChartLine, FaBalanceScale, FaClipboardCheck, FaBook } from 'react-icons/fa';
import "../Styles/skills.css"
function Skills(){
    return(
        <div className="accountant-skills">
        <h2 className='heading'>Skills</h2>
        <div className='skills-container'>
          <div className='skill-card'>
            <FaFileAlt className='skill-icon' />
            <h3 className='skill-title'>Financial Analysis</h3>
            <p className='skill-description'>Expert in financial modeling and forecasting</p>
          </div>
          <div className='skill-card'>
            <FaChartLine className='skill-icon' />
            <h3 className='skill-title'>Budgeting and Forecasting</h3>
            <p className='skill-description'>Developing accurate budgets and financial projections</p>
          </div>
          <div className='skill-card'>
            <FaBalanceScale className='skill-icon' />
            <h3 className='skill-title'>Tax Planning</h3>
            <p className='skill-description'>Strategic tax planning and compliance</p>
          </div>
          <div className='skill-card'>
            <FaClipboardCheck className='skill-icon' />
            <h3 className='skill-title'>Auditing</h3>
            <p className='skill-description'>Comprehensive audit preparation and support</p>
          </div>
          <div className='skill-card'>
            <FaBook className='skill-icon' />
            <h3 className='skill-title'>Bookkeeping</h3>
            <p className='skill-description'>Detailed record-keeping and reconciliation</p>
          </div>
        </div>

      </div>
    )
}
export default Skills;