import React from 'react';
import "./experiences.css";

const Experiences = () => {
  return (
    <section className="experiences section" id="experience">
       <h2 className="section__title">Work History</h2>

        <div className="experiences_container container">
            <div className="experiences__tabs">
                <div className="experiences__button button--flex">
                    <i className="uil uil-briefcase-alt experiences__icon"></i> Experiences
                </div>
            </div>

            <div className="experiences__sections">
                <div className="experiences__content experiences__content-active">
                    <div className="experiences__data">
                        <div>
                            <h3 className="experiences__title">Cybersecurity Software Engineering Intern</h3>
                            <span className="experiences__subtitle">Trane Technologies </span>
                            <span className="experiences__location"> Minneapolis, MN </span>
                            <div className="experiences__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2024 - Aug 2024
                            </div>

                        </div>

                        <div>
                            <span className="experiences__rounder"></span>
                            <span className="experiences__line"></span>
                        </div>
                    </div>

                    <div className="experiences__data">
                        <div></div>

                        <div>
                            <span className="experiences__rounder"></span>
                            <span className="experiences__line"></span>
                        </div>


                        <div>
                            <h3 className="experiences__title">Information Security Developer</h3>
                            <span className="experiences__subtitle">University of Minnesota Office of Information Technology</span>
                            <span className="experiences__location"> Minneapolis, MN </span>
                            <div className="experiences__calendar">
                                <i className="uil uil-calendar-alt"></i> Mar 2023 – May 2024
                            </div>

                        </div>

                    </div>

                    <div className="experiences__data">
                        <div>
                            <h3 className="experiences__title">Research Assistant</h3>
                            <span className="experiences__subtitle">Distributed Machine Learning and Integrated Systems Lab </span>
                            <span className="experiences__location"> Minneapolis, MN </span>
                            <div className="experiences__calendar">
                                <i className="uil uil-calendar-alt"></i> Feb 2023 – May 2024
                            </div>

                        </div>

                        <div>
                            <span className="experiences__rounder"></span>
                            <span className="experiences__line"></span>
                        </div>
                    </div>

            
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experiences