import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {

  return (
    <div className='nav'>
        <ul>
            <li> <Link to="/" className='link'>Home</Link> </li>
            <li> <Link to="/about" className='link'>About</Link> </li>
            <li> <Link to="/gallery" className='link'>Gallery</Link> </li>
            <li> <Link to="/test" className='link'>Testimonial</Link> </li>
            <li> <Link to="/contact" className='link'>Contact us</Link> </li>
         
        </ul>
    </div>
  )
}

export default Navbar