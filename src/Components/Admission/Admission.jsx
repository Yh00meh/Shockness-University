import React from 'react'
import './Admission.css'
import { motion } from 'framer-motion'

const Admission = () => {
  return (
    <div className="background-admission">
      {/* --- MAIN REQUIREMENTS BUBBLE --- */}
      <motion.div 
        className='admission'
        id='admissions'
        initial={{ opacity: 0 }}
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

      {/* --- SECOND INFO BUBBLE --- */}
      <motion.div 
        className='info-bubble'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
      >
        <h2 id='inter-stu'>International Students</h2>
        <p>
          I-20 support; financial documentation; official evaluated transcripts (NACES member).
        </p>

        <h2>English Proficiency</h2>
        <ul>
          <li>TOEFL: 70</li>
          <li>IELTS: 6.0</li>
          <li>Pearson PTE: 54 (waived with U.S. degree)</li>
        </ul>

        <h2>Accessibility</h2>
        <p>
          ADA/Section 504 compliance via the Office of Accessibility Services (OAS). 
          Reasonable accommodations may include testing supports, assistive technology, or adapted clinical placement.
        </p>

        <h2>Academic Progression & Standards</h2>
        <ul>
          <li>Minimum semester and cumulative GPA: 3.0 throughout the program.</li>
          <li>Academic Warning/Probation: GPA below 3.0 or repeated failures in major nursing courses.</li>
          <li>Dismissal: Failure to regain a 3.0 GPA after probation; two separate course failures; or safety/ethical violations (e.g., HIPAA).</li>
          <li>Students on probation will have a remediation plan with an advisor and may appeal via University committees per policy.</li>
        </ul>

        <h2 id='edu-tech'>Interprofessional Education & Technology</h2>
        <ul>
          <li>Collaborative case studies and clinical rounds with pharmacy, PT/OT, and social work, emphasizing systems thinking and population health.</li>
          <li>Informatics: EHR training, decision-support tools, and medication reconciliation.</li>
          <li>Exposure to telehealth and mobile health applications.</li>
          <li>Evidence-based practice: data analytics projects and research appraisal to support clinical decision-making.</li>
        </ul>

        <h2 id='exper-supp'>Student Experience & Support</h2>
        <ul>
          <li>Academic advising and mentoring to support progression and licensure readiness.</li>
          <li>Learning Resource Center: tutoring, writing support, and language assistance for international students.</li>
          <li>Wellness and counseling services promoting an inclusive campus culture.</li>
          <li>Universal design for learning across courses and simulation environments.</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Admission
