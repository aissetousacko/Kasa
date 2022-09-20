import { Link } from 'react-router-dom'

const Card = ({ title, cover, id }) => {
  return (
    <Link to={`/rent/${id}`} className="card" key={id}>
      <img src={cover} alt="Carte" />
      <p className="card__text">{title}</p>
    </Link>
  )
}

export default Card
