import React from 'react'
import BannerImage from '../assets/banner.png'

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Bannière" />
      <div className="banner__text">Chez vous, partout et ailleurs</div>
    </div>
  )
}

export default Banner
