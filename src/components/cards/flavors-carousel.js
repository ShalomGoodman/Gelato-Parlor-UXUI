import React from 'react'
import FlavorCard from './FlavorCard'
import chocolateAmaretto from '../../assets/images/List View Edited (100x100) 72ppi/Amaretto Crunch.png';
import blackCurrant from '../../assets/images/List View Edited (100x100) 72ppi/Black Currant.png';
import bloodOrange from '../../assets/images/List View Edited (100x100) 72ppi/Blood Orange.png';
import cherry from '../../assets/images/List View Edited (100x100) 72ppi/Cherry.png';
import chocolateKahlua from '../../assets/images/List View Edited (100x100) 72ppi/Chocolate Kahlua.png';
import fig from '../../assets/images/List View Edited (100x100) 72ppi/Fig.png';
import mango from '../../assets/images/List View Edited (100x100) 72ppi/Mango.png';
import passionFruit from '../../assets/images/List View Edited (100x100) 72ppi/Passion Fruit.png';
import vanillaChocolateChip from '../../assets/images/List View Edited (100x100) 72ppi/Vanilla Chocolate Chip.png';


export default function FlavorCarousel() {
  return (
    <div className='flavor-carousel-container'>
        <div className='flavor-carousel-content'>
            <FlavorCard text='Chocolate Amaretto' image={chocolateAmaretto}/>
            <FlavorCard text='Black Currant' image={blackCurrant}/>
            <FlavorCard text='Blood Orange' image={bloodOrange}/>
            <FlavorCard text='Cherry' image={cherry}/>
            <FlavorCard text='Chocolate Kahlua' image={chocolateKahlua}/>
            <FlavorCard text='Fig' image={fig}/>
            <FlavorCard text='Passion Fruit' image={passionFruit}/>
            <FlavorCard text='Vanilla Chocolate-Chip' image={vanillaChocolateChip}/>
            <FlavorCard text='Mango' image={mango}/>
        </div>
    </div>
  )
}
