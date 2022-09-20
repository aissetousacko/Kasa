import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Rent = () => {
  const rentId = useParams()
  const [rental, setRental] = useState({})

  useEffect(() => {
    fetch(`../../data.json`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setRental(
          data.find((rent) => {
            return rent.id === rentId.id
          })
        )
      )
  }, [rentId.id])

  return <div>{rental.title}</div>
}

export default Rent
