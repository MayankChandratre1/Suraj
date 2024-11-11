import React from 'react';
import './Footer.css';
import github from './images/github.png';
import insta from './images/instagram.png';
import linkedin from './images/linkedin.png';
import logo from './images/logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="links">
                <img src={github} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
        <div className="logo-footer">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer
