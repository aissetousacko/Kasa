import React from 'react'

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      {text && (
        <div className="banner__text">Chez vous, partout et ailleurs</div>
      )}
    </div>
  )
}

export default Banner
