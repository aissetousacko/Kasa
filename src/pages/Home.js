import React from 'react'
import Banner from '../components/Banner'
import BannerImage from '../assets/banner.png'
import Card from '../components/Card'

const Home = ({ data }) => {
  return (
    <div>
      <Banner image={BannerImage} text={true} />
      <ul className="gallery">
        {data.map((rent) => (
          <Card
            key={rent.id}
            id={rent.id}
            title={rent.title}
            cover={rent.cover}
          />
        ))}
      </ul>
    </div>
  )
}

export default Home
