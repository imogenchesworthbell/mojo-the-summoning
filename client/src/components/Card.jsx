import './Card.css'

function Card({ card }) {
  return (
    <article className='card'>
      <img src={card.imgUrl} alt={card.name} />
      <div className='details'>
        <h2>{card.name}</h2>
        <ul>
          <li>
            Mojo <span className='num'>{card.mojo}</span>
          </li>
          <li>
            Stamina <span className='num'>{card.stamina}</span>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default Card
