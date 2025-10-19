import React, { useState } from "react";
import "./Navbar.css";
import "../About/About"
import "../Hero/Hero"
import "../Admission/Admission"
import "../CurriculumPlan/CurriculumPlan"
import logo from "../../assets/Shockness_University.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <nav className="navbar">
      <AnchorLink offset={50} href="#hero"><img src={logo} alt="ShocknessULogo"/></AnchorLink>
      <ul className="nav-menu">
        <li><AnchorLink offset={50} href="#about-information">About</AnchorLink></li>
        <li><AnchorLink offset={50} href="#mission-information">Shockness University: Mission Statement</AnchorLink></li>
        <li><AnchorLink offset={50} href="#admissions">Admission Requirements</AnchorLink></li>

        {/* Dropdown Item */}
        <li 
          className="dropdown"
          onMouseOver={() => setOpenDropdown(true)}
        >
          <button className="dropbtn" onClick={toggleDropdown}>
            More ▾
          </button>
          {openDropdown && (
            <ul 
              className="dropdown-content"
              onMouseOver={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <li><AnchorLink offset={50} href="#curriculum-plan">Curriculum Plan</AnchorLink></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
