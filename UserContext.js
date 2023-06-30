import { createContext } from 'react'

const UserContext = createContext({
  user: {
    username: 'Dummy',
    email: 'Dummy@gmail.com',
  },
})

export default UserContext
