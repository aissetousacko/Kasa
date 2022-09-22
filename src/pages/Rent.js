import React /* , { useState, useEffect } */ from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slider'
import Stars from '../components/Stars'
import Tags from '../components/Tags'

const Rent = ({ data }) => {
  const rentId = useParams()
  /* const [rental, setRental] = useState({})

  useEffect(() => {
    fetch(`../../data.json`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRental(
          data.find((rent) => {
            return rent.id === rentId.id
          })
        )
      })
  }, [rentId.id]) */

  const accomodation = data.find((item) => item.id === rentId.id)
  console.log(accomodation)

  /* const [firstname, lastname] = rental.host.name.split(' ')
  console.log('firstname ', firstname) */
  const [firstname, lastname] = accomodation.host.name.split(' ')
  // console.log('firstname ', firstname)

  return (
    <div className="rental">
      <Slider pictures={accomodation.pictures} title={accomodation.title} />

      {/* <div className="rental__information">
        <div className="rental__title">
          <p className="rental__title--first">{rental.title}</p>
          <p className="rental__title--second">{rental.location}</p>
        </div>
        <div className="rental__host">
          <p>
            {firstname} <br />
            {lastname}{' '}
          </p>
          <img src={rental?.host?.picture} alt="Propriétaire" />
        </div>
      </div> */}

      <div className="rental__information">
        <div className="rental__title">
          <p className="rental__title--first">{accomodation.title}</p>
          <p className="rental__title--second">{accomodation.location}</p>
        </div>
        <div className="rental__host">
          <p>
            {firstname} <br />
            {lastname}{' '}
          </p>
          <img src={accomodation.host.picture} alt="Propriétaire" />
        </div>
      </div>

      <div className="rental__tags-stars">
        <div className="tags-container">
          <Tags tags={accomodation.tags} />
        </div>
        <Stars ratings={accomodation.rating} />
      </div>

      <div className="rental__description">
        <h1>DESCRIPTION</h1>
        <h1>EQUIPEMENTS</h1>
      </div>
    </div>
  )
}

export default Rent
