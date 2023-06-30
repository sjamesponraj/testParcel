import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './UserContext'

export const Header = () => {
  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <>
      <ul>
        <Link to="/menu">
          <li>Menu</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/support">
          <li>Support</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <li style={{ listStyle: 'none' }}>{'Logged in - ' + user.username}</li>
      </ul>
    </>
  )
}
