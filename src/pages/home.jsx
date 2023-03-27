import React from 'react'
import background from '../assets/background.gif'
import "./home.css"
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <div className="text">
        <h1>The Super Awesome Color Scheme Generator!</h1>
        <p>Create the perfect palette or get inspired by thousands of beautiful color schemes.</p>
        <Link to="/generator" className='header-link'><button>Start the generator</button></Link>
      </div>
      <img src={background} alt="background" className="background-gif" />
    </div>
  )
}

export default Home
