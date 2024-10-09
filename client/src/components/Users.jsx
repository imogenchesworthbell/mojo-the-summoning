import { useEffect, useState } from 'react'
import { api } from '../services/api'
import './Users.css'
import Cards from './Cards'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => void fetchUsers(), [])

  async function fetchUsers() {
    setUsers(await api.get('user'))
  }

  return (
    <div className='users'>
      {users.map(user => (
        <div key={user.id} className='user'>
          <h2>
            <span className='material-icons user-icon'>person</span>
            {user.username} | {user.Deck.name}{' '}
            <span className='xp'>{user.Deck.xp}xp</span>
          </h2>
          <Cards cards={user.Deck.Cards} />
        </div>
      ))}
    </div>
  )
}

export default Users
