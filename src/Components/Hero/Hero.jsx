import React from 'react'
import {createBox, motion} from 'framer-motion'
import './Hero.css'
import BackgroundHero from './BackgroundHero'
import logo from '../../assets/Shockness_University.png'

const Hero = () => {
    return (     
        <BackgroundHero>  
            <motion.div 
            className='hero' 
                initial={{
                        opacity: 0,
                        scale: 1.25
                    }}
                    
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 3
                        }
                    }}

            > 
                    <h1 id='home'>Empowering Future Nurses Through Excellence and Innovation</h1>
                    <p><span>A student-centered institution committed to academic
                    excellence, equity, and professional readiness.</span></p>

            </motion.div> 
        </BackgroundHero> 
    )
}

export default Hero