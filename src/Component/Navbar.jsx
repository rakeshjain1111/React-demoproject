import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {

  return (
    <div className='nav'>
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/gallery">Gallery</Link> </li>
            <li> <Link to="/test">Testimonial</Link> </li>
            <li> <Link to="/contact">Contact us</Link> </li>
         
        </ul>
    </div>
  )
}

export default Navbar