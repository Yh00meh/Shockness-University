import React from "react";
import { motion } from "framer-motion";
import "./CurriculumPlan.css";

const CurriculumPlan = () => {
  // Reusable animation variant for smooth fade + slide
  const boxVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="curriculum-container">
      <motion.h1
        id = 'curriculum-plan'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bachelor of Science in Nursing — Curriculum Plan
      </motion.h1>

      {/* YEAR 1 */}
      <motion.div
        className="year-section"
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Year 1</h2>
        <div className="semester">
          <h3>Fall Semester</h3>
          <ul>
            <li>ENG 101 — English Composition (4 credits)</li>
            <li>PSY 101 — Developmental Psychology (4 credits)</li>
            <li>BIO 130 — Anatomy & Physiology I (3 credits)</li>
            <li>BIO 130A — Anatomy & Physiology I Lab (1 credit)</li>
            <li>CINQ 101 — Critical Inquiry / First-Year Seminar (3 credits)</li>
          </ul>
        </div>
        <div className="semester">
          <h3>Spring Semester</h3>
          <ul>
            <li>STA 100 — Statistics (4 credits)</li>
            <li>SOCL 101 — Intro to Sociology (4 credits)</li>
            <li>BIO 131 — Anatomy & Physiology II (3 credits)</li>
            <li>BIO 131A — Anatomy & Physiology II Lab (1 credit)</li>
            <li>HUM 120 — World Religion (4 credits)</li>
          </ul>
        </div>
      </motion.div>

      {/* YEAR 2 */}
      <motion.div
        className="year-section"
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Year 2</h2>
        <div className="semester">
          <h3>Fall Semester</h3>
          <ul>
            <li>CHE 101 — Physiological Chemistry (3 credits)</li>
            <li>CHE 101A — Physiological Chemistry Lab (1 credit)</li>
            <li>HUM 125 — Diversity (4 credits)</li>
            <li>ENG 102 — Critical Writing (4 credits)</li>
            <li>BIO 140 — Pathophysiology (4 credits)</li>
          </ul>
        </div>
        <div className="semester">
          <h3>Spring Semester</h3>
          <ul>
            <li>BIO 201 — Microbiology (3 credits)</li>
            <li>BIO 201A — Microbiology Lab (1 credit)</li>
            <li>BIO 209 — Emerging Trends in Genetics (2 credits)</li>
            <li>NURS 101 — Nutrition in Nursing (2 credits)</li>
            <li>NURS 110 — Nursing Informatics (4 credits)</li>
            <li>NURS 112 — Health Policy (4 credits)</li>
          </ul>
        </div>
      </motion.div>

      {/* YEAR 3 */}
      <motion.div
        className="year-section"
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Year 3</h2>
        <div className="semester">
          <h3>Fall Semester</h3>
          <ul>
            <li>NURS 201 — Fundamentals of Nursing (3 credits)</li>
            <li>NURS 201A — Fundamentals Clinical (2 credits)</li>
            <li>NURS 201B — Simulation Lab (1 credit)</li>
            <li>NURS 210 — Health Assessment (3 credits)</li>
            <li>NURS 210A — Health Assessment Lab (1 credit)</li>
            <li>NURS 288 — Pharmacology I (2 credits)</li>
            <li>NURS 114 — Intro to Professional Nursing Practice (2 credits)</li>
            <li>NURS 115 — Integration Seminar I (1 credit)</li>
          </ul>
        </div>
        <div className="semester">
          <h3>Spring Semester</h3>
          <ul>
            <li>NURS 240 — Med-Surg I (3 credits)</li>
            <li>NURS 240A — Med-Surg I Clinical (2 credits)</li>
            <li>NURS 240B — Med-Surg Simulation Lab (1 credit)</li>
            <li>NURS 294 — Mental Health Nursing (3 credits)</li>
            <li>NURS 294A — Mental Health Clinical (1 credit)</li>
            <li>NURS 284 — Evidence-Based Practice (3 credits)</li>
            <li>NURS 289 — Pharmacology II (2 credits)</li>
            <li>NURS 215 — Integration Seminar II (1 credit)</li>
          </ul>
        </div>
      </motion.div>

      {/* YEAR 4 */}
      <motion.div
        className="year-section"
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Year 4</h2>
        <div className="semester">
          <h3>Fall Semester</h3>
          <ul>
            <li>NURS 301 — Community Health Nursing (3 credits)</li>
            <li>NURS 301A — Community Clinical (1 credit)</li>
            <li>NURS 303 — Pediatric Nursing (2 credits)</li>
            <li>NURS 303A — Pediatric Clinical (1 credit)</li>
            <li>NURS 304 — OB Nursing (2 credits)</li>
            <li>NURS 305 — Nursing Care of the Older Adult (3 credits)</li>
            <li>NURS 315 — Integration Seminar III (1 credit)</li>
          </ul>
        </div>
        <div className="semester">
          <h3>Spring Semester</h3>
          <ul>
            <li>NURS 440 — Med-Surg II (3 credits)</li>
            <li>NURS 440A — Med-Surg II Clinical (2 credits)</li>
            <li>NURS 440B — Med-Surg II Simulation Lab (1 credit)</li>
            <li>NURS 405 — Transition into Professional Nursing Practice (3 credits)</li>
            <li>NURS 407 — Nursing Leadership Development (3 credits)</li>
            <li>NURS 415 — Integration Seminar IV (1 credit)</li>
          </ul>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        className="summary"
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p><strong>Total Credits:</strong> 121</p>
        <p><strong>Credits for Major:</strong> 90</p>
        <p><strong>General Education Credits:</strong> 31</p>
      </motion.div>
    </div>
  );
};

export default CurriculumPlan;
