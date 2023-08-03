import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

function FlavorCard({ text, image }) {
  const { isDarkMode } = useContext(ThemeContext);

  // Split the text into parts.
  const textSplit = text.split(' ');

  // Join all parts except the first one.
  const remainingText = textSplit.slice(1).join(' ');

  return (
    <div className={`flavor-card-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className={`flavor-image-container ${isDarkMode ? 'dark' : 'light'}`}>
        <img className="flavor-image" src={image} alt={text} />
      </div>
      <div className="flavor-text-container">
        <p className={`flavor-text ${isDarkMode ? 'dark' : 'light'}`}>
          {textSplit[0]}<br/>{remainingText}
        </p>
      </div>
    </div>
  )
}

export default FlavorCard;
