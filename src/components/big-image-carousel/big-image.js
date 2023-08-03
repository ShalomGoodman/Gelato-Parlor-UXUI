import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/Carousel Edited (393x250) 72ppi/Carousel 1.png';
import image2 from '../../assets/images/Carousel Edited (393x250) 72ppi/Carousel 3.png';
import image3 from '../../assets/images/Carousel Edited (393x250) 72ppi/Carousel 4.png';
import './bigImageCarousel.css';
import MeatBalls from './meatballs';
export default function BigImageCarousel() {
  const [sliderPercent, setSliderPercent] = useState(0);
  const [sliderSpeed, setSliderSpeed] = useState(0.5);
  const [images, setImages] = useState([image1, image2, image3]);
  const [index, setIndex] = useState(1)
  const [meatball, setMeatball] = useState(['chosen', 'not-chosen', 'not-chosen']);
  const styles = {
    transform: `translate(-${sliderPercent}%)`,
    transition: `all ${sliderSpeed}s`,
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSliderSpeed(0.5);
      setSliderPercent((prevPercent) => prevPercent + 100);
      setTimeout(() => {
        setSliderSpeed(0);
        setSliderPercent(0);
        setImages((prevImages) => [
          prevImages[1], // move the first image to the end
          prevImages[2], // move the second image to the first position
          prevImages[0], // move the third image to the second position
        ]);
        index < 2 ? setIndex((prevIndex) => prevIndex + 1) : setIndex(0);
      }, 500);
      setMeatball(() => {
        if (index === 0) {
            return ['chosen', 'not-chosen', 'not-chosen'];
        } else if (index === 1) {
            return ['not-chosen', 'chosen', 'not-chosen'];
        } else if (index === 2){
            return ['not-chosen', 'not-chosen', 'chosen'];
        }
      });
    }, 2000);
    // Clean up the interval when the component unmounts or when dependencies change
    return () => {
      clearInterval(intervalId);
    };
  }, [index, meatball]);
  return (
    <div className='big-image-carousel-container'>
      <div className='big-image-carousel'>
        <div className='slider' style={styles}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
      <MeatBalls index={index} meatball={meatball}/>
    </div>
  );
}