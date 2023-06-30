import { useContext } from 'react'
import UserContext from './UserContext'

export const Support = () => {
  const { user, setUser } = useContext(UserContext)
  console.log(setUser)
  const inputHandler = (e) => {
    console.log(e.target.name)
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  // As the User Types, the value gets changes in Header
  return (
    <>
      <input
        style={{ display: 'block' }}
        type="text"
        name="username"
        placeholder="Enter Your Names"
        onChange={(e) => inputHandler(e)}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter your Email Address"
        onChange={(e) => inputHandler(e)}
      />
    </>
  )
}
