import React from 'react'
import './split-card.css'

function SplitCard({ title, description, image, isDarkMode }) {
    return (
        <div className={`split-card-light-hifi${isDarkMode ? " dark" : ""}`}>
            <div className='split-card-light-hifi-inner'>
                <div className={`rectangle-parent${isDarkMode ? " dark" : ""}`}>
                    <div className={`group-child${isDarkMode ? " dark" : ""}`} />
                    <img className='mustard1-icon' alt="" src={image} />
                </div>
            </div>
            <div className={`gelato-type${isDarkMode ? " dark" : ""}`}>{title}</div>
            <div className={`more-text1${isDarkMode ? " dark" : ""}`}>
                <p className={`nutty-bliss-in${isDarkMode ? " dark" : ""}`}>{description}</p>
            </div>
            <div className={`thin-button${isDarkMode ? " dark" : ""}`}>
                <div className={`grab${isDarkMode ? " dark" : ""}`}>Grab</div>
            </div>
        </div>
    );
}

export default SplitCard
