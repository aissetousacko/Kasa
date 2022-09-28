import React /* , { useState, useEffect } */ from 'react'
import { useParams } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import Slider from '../components/Slider'
import Stars from '../components/Stars'
import Tags from '../components/Tags'
import Error404 from './Error404'

const Rent = ({ data }) => {
  const rentId = useParams()

  const accomodation = data.find((item) => item.id === rentId.id)
  // console.log(accomodation)

  if (accomodation === undefined || accomodation === null) {
    return <Error404 />
  }

  const [firstname, lastname] = accomodation.host.name.split(' ')

  return (
    <div className="rental">
      <Slider pictures={accomodation.pictures} title={accomodation.title} />

      <div className="rental__information">
        <div className="rental__information--accomodation">
          <div className="rental__title">
            <p className="rental__title--first">{accomodation.title}</p>
            <p className="rental__title--second">{accomodation.location}</p>
          </div>
          <div className="tags-container">
            <Tags tags={accomodation.tags} />
          </div>
        </div>

        <div className="rental__information--host">
          <div className="rental__host">
            <p>
              {firstname} <br />
              {lastname}{' '}
            </p>
            <img src={accomodation.host.picture} alt="Propriétaire" />
          </div>
          <Stars ratings={accomodation.rating} />
        </div>
      </div>

      <div className="rental__description">
        <Dropdown
          title="Description"
          content={accomodation.description}
          className="dropdown--rent"
        />
        <Dropdown
          title="Équipements"
          content={accomodation.equipments}
          className="dropdown--rent"
        />
      </div>
    </div>
  )
}

export default Rent
