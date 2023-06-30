import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1>I am the About Page</h1>
      <ul>
        <Link to="/about/who">
          <li>WHO Page</li>
        </Link>
        <Link to="/about/why">
          <li>WHY Page</li>
        </Link>
      </ul>
    </>
  )
}

export default About
