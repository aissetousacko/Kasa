import React from 'react'
import starActive from '../assets/star-on.png'
import starOff from '../assets/star-off.png'

const Stars = ({ ratings }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="star-container">
      {stars.map((item, index) => {
        return (
          <img
            key={item + '-' + index}
            className="star"
            src={index < ratings ? starActive : starOff}
            alt="Note"
          ></img>
        )
      })}
    </div>
  )
}

export default Stars
