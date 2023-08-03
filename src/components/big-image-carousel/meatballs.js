import React from 'react'
export default function MeatBalls(props) {
    return (
    <div className='meatball-container'>
        <div className={`meatball ${props.meatball[0]}`}>
        </div>
        <div className={`meatball ${props.meatball[1]}`}>
        </div>
        <div className={`meatball ${props.meatball[2]}`}>
        </div>
    </div>
  )
}