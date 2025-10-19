import React from 'react'
import './Admission.css'
import { motion } from 'framer-motion'
import bgImage from '../../assets/Admission_nurse.avif'

const Admission = () => {
  return (
    <div className="background-admission">
      <motion.div 
        className='admission'
        id='admissions'
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        <h1>Admission Requirements</h1>
        <p><span>Applicants to the nursing program must submit a complete application that includes the following:</span></p>
        <ol type='1'>
          <li>Application Form – A fully completed application for admission to the nursing program, submitted by the posted deadline.</li>
          <li>Official Transcripts – Transcripts from all previously attended schools to verify coursework and grades.</li>
          <li>Minimum GPA – A cumulative GPA of 3.0 on a 4.0 scale is generally required.</li>
          <li>Standardized Test Scores – Applicants must submit scores from one or more standardized tests, such as:</li>
          <ul>
            <li>SAT score of 1100 or better or ACT score of 22 or better</li>
            <li>TEAS (Test of Essential Academic Skills) of 70% or higher</li>
            <li>Kaplan Admission Test score of 75% or higher</li>
          </ul>
          <li>HESI-A2 Exam – The Health Education Systems Incorporated A2 exam is required for diagnostic evaluation.</li>
          <li>Prerequisite Coursework – Completion of required courses such as biology, chemistry, anatomy, physiology, and psychology, with grades of B or higher.</li>
          <li>Letters of Recommendation – Two letters from academic or professional references.</li>
          <li>Personal Statement / Essay – A written statement outlining motivation, career goals, and relevant experiences.</li>
          <li>Interview / Additional Requirements – An interview is encouraged. A background check, immunization history, and drug screening are mandatory prior to acceptance.</li>
        </ol>
      </motion.div>
    </div>
  )
}

export default Admission
