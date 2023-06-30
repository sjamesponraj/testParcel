import React, { Children, Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Header } from './Header'
import Menu from './Menu'
import { Body } from './Body'
import { Contact } from './Contact'
import About from './About'

import { Who } from './Who'
import { Why } from './Why'
import UserContext from './UserContext'
import { Support } from './Support'

const root = ReactDOM.createRoot(document.getElementById('root'))
const About = lazy(() => import('./About'))

const App = () => {
  const [user, setUser] = useState({
    username: 'James',
    email: 'sjamesponraj@gmail.com',
  })
  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },

      {
        path: '/menu',
        element: <Menu />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/support',
        element: <Support />,
      },

      {
        path: '/about',
        element: (
          <Suspense fallback={<Contact />}>
            <About />{' '}
          </Suspense>
        ),
        children: [
          {
            path: '/about/Who',
            element: <Who />,
          },
          {
            path: '/about/Why',
            element: <Why />,
          },
        ],
      },
    ],
  },
])

root.render(<RouterProvider router={appRouter} />)
