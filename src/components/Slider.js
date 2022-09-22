import React, { useState } from 'react'
import leftArrow from '../assets/arrow-left.png'
import rightArrow from '../assets/arrow-right.png'

const Slider = ({ pictures, title }) => {
  const [count, setCount] = useState(0)

  const previousSlide = () => {
    setCount(count === 0 ? pictures.length - 1 : count - 1)
  }

  const nextSlide = () => {
    setCount(count === pictures.length - 1 ? 0 : count + 1)
  }

  return (
    <div className="slider">
      <img className="picture" src={pictures[count]} alt={title} />

      {pictures.length !== 1 && (
        <img
          className="slider__arrow slider__arrow--left"
          src={leftArrow}
          alt="Précédent"
          onClick={previousSlide}
        />
      )}

      {pictures.length !== 1 && (
        <img
          className="slider__arrow slider__arrow--right"
          src={rightArrow}
          alt="Suivant"
          onClick={nextSlide}
        />
      )}

      <span className="slider__counter">
        {count + 1} / {pictures.length}
      </span>
    </div>
  )
}

export default Slider
