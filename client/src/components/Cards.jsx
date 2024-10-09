import './Cards.css'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import Card from './Card'

function Cards({ cards }) {
  // const [cards, setCards] = useState([])

  // useEffect(() => void fetchCards(), [])

  // async function fetchCards() {
  //   setCards(await api.get('card'))
  // }

  return (
    <section className='cards'>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  )
}

export default Cards
