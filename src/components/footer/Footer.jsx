import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Akanksha</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#experience" className="footer__link">Experience</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/akanksharai1411/" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/akanksharai1411" className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
        </a>
            </div>

            <span className="footer__copy"> Design Inspiration: Cryptical Coder</span>
        </div>
    </footer>
  )
}

export default Footer