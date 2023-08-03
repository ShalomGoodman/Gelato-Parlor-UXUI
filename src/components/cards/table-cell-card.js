import React,  { useContext }  from "react";
import fig from "../../assets/images/List View Edited (100x100) 72ppi/Fig.png";
import passion from "../../assets/images/List View Edited (100x100) 72ppi/Passion Fruit.png";
import vanilla from "../../assets/images/List View Edited (100x100) 72ppi/Vanilla Chocolate Chip.png";
import './table-cell-card.css'
import { ThemeContext } from "../../context/themeContext";

export default function TableCellCard() {
    const { isDarkMode } = useContext(ThemeContext);
  


  return (
     <div className={`container-cell-card ${isDarkMode ? "dark" : ""}`}>
      <div className="frame-1">
        <div className="image-container">
          <img src={fig} alt="fig-flavour" className="fig-flavour" />
        </div>
        <div className="content-container">
          <div className="letter-table1">
            <p className={`fig-title ${isDarkMode ? "dark" : ""}`}>Fresh White Fig</p>
            <p className={`fig-p ${isDarkMode ? "dark" : ""}`} >Taste buds go to Mediterranean</p>
            <div className='table-cell__button'>
              Grab
            </div>
          </div>
        </div>
      </div>
      <div className="frame-2">
        <img src={passion} alt="passion-flavour" />
        <div className="letter-table2">
          <p className={`passion-title ${isDarkMode ? "dark" : ""}`}>Passion Fruit</p>
          <p className={`passion-p ${isDarkMode ? "dark" : ""}`} >Tangy sweet and tropical bliss</p>
          <div className='table-cell__button' >
            Grab
          </div> 
        </div>
      </div>
      <div className="frame-3">
        <img src={vanilla} alt="vanilla-flavoured" />
        <div className="letter-table3">
          <p className={`vanilla-title ${isDarkMode ? "dark" : ""}`}>Vanilla Chocolate Chip</p>
          <p className={`vanilla-p fuck-you ${isDarkMode ? "dark" : ""}`} >Irresistible, creamy and velvety</p>
          <div className='table-cell__button' >
            Grab
          </div>
        </div>
      </div>
    </div>
  );
}
