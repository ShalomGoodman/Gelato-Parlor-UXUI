import React, { useContext } from "react";
import logo from "../assets/images/Gentile Logo/Gentile_logo_Brown.png";
import logo2 from "../assets/images/Gentile Logo/Gentile_logo_White.png";
import "./footer.css";
import { ThemeContext } from "../context/themeContext";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // Choose the logo based on dark mode
  const logoSrc = isDarkMode ? logo2 : logo;

  return (
    <div className={`footer-container${isDarkMode ? " dark-mode" : ""}`}>
      <img src={logoSrc} alt="gentile-logo-white" className="logo" />
      <div className='frame1'>
        <p className="Subheader">About Gentile</p>
        <p className="Subheader">Privacy & Terms</p>
        <p className="Subheader">Our Stores</p>
        <p className="Subheader">FAQs</p>
      </div>
      <p className="small-text">2023, UXDI Inc.</p>
    </div>
  );
};

export default Footer;
