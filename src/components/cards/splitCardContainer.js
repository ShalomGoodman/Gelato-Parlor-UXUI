import React, { useContext } from 'react';
import SplitCard from './split-card';
import mustardImage from '../../assets/images/Split Card Edited (170x158) 72ppi/Mustard.png';
import amarettoImage from '../../assets/images/Split Card Edited (170x158) 72ppi/Coffee.png';
import './card-container.css';
import { ThemeContext } from '../../context/themeContext';  // adjust path as necessary

function SplitCardContainer() {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        // in SplitCardContainer.js
        <div className={`card-container${isDarkMode ? " dark" : " light"}`}>
            <SplitCard
                title="Amaretto Delight"
                description="Smooth harmony, vanilla and chocolate, and a hint of luscious amaretto"
                image={amarettoImage}
                isDarkMode={isDarkMode}
            />
            <SplitCard
                title="Pistachio Dream"
                description="Nutty bliss in every scoop, premium pistachios take you to paradise"
                image={mustardImage}
                isDarkMode={isDarkMode}
            />
        </div>
    );
};


export default SplitCardContainer;
