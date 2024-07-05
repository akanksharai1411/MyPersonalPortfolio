import React from 'react';
import "./skills.css";
import "./Languages";
import Languages from './Languages';
import Tools_Frameworks from './Tools_Frameworks';
import OperatingSystems from './OS';


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Background</span>

        <div className="skills__container container grid">
            <Languages />

            <Tools_Frameworks/>

            <OperatingSystems/>
        </div>
    
    </section>
  )
}

export default Skills