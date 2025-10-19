import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Admission from "./Components/Admission/Admission"
import CurriculumPlan from "./Components/CurriculumPlan/CurriculumPlan";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Admission/>
      <CurriculumPlan/>
    </div>
  )
}

export default App