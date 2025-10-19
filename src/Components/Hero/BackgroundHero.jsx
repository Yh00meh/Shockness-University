import React from 'react'
import './BackgroundHero.css'
import bgImage from '../../assets/Header_nurse.jpg' // adjust path

const BackgroundHero = ({ children }) => {
  return (
    <div className="background-hero">
      <img src={bgImage} alt="Background" className="bg-image" />
      <div className="blur-overlay"></div>
      {children}
    </div>
  )
}

export default BackgroundHero