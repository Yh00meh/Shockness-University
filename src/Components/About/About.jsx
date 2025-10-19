import React from 'react'
import { motion} from "framer-motion";
import logo from '../../assets/Shockness_University.png'
import './About.css'

const About = () => {
    return (
        <motion.div 
        className="about"
        id="about-information"
            initial={{
                opacity: 0,
            }}
            
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 3
                }
            }}
        >
            <div className="about-title">
                <h1>About</h1>
            </div>
            <div className="about-sections">
                <div className="about-right">
                    <div className='about-para'>
                        <p>A student-centered institution committed to academic excellence, equity, and professional readiness. BSN program aligns with AACN Essentials (2021) and 
                           CCNE Standards (effective Jan 1, 2025).</p>
                    </div>
                </div>
            </div>
            <div className="about-title" id='mission-information'>
                <h1>Mission Statement</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                </div>
                <div className="about-right">
                    <div className='about-para'>
                        <p>Prepare compassionate, competent nurses through rigorous academics, clinical immersion, and
                           evidence-based practice.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;