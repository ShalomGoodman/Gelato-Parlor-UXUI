import React, { useContext } from 'react';
import image from '../../assets/images/Full Card Edited (363x250) 72ppi/Pistachio.png';
import './full-card.css';
import { ThemeContext } from '../../context/themeContext';

function FullCard() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`full-card ${isDarkMode ? 'dark' : ''}`}>
      <div className='full-card__image-container'>
        <img className='full-card__image' src={image} alt='placeholder' />
      </div>
      <div className={`full-card__content ${isDarkMode ? 'dark' : ''}`}>
        <h3 className={`full-card__title ${isDarkMode ? 'dark' : ''}`}>Pomegranate Whispers</h3>
        <p className={`full-card__description ${isDarkMode ? 'dark' : ''}`}>
          Harmonious blend: creamy vanilla, roasted pistachios, and tangy pomegranate
        </p>
        <div className='full-card__button' onClick={toggleTheme}>
          Grab
        </div>
      </div>
    </div>
  );
}


export default FullCard;
