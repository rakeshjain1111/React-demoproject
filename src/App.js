import React from 'react'
import './App.css';
import 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
function App() {
  return (
    
    <div className='main'>  
       <BrowserRouter>
       <Navbar/>
          <Routes>
            <Route path='/' element={<h1>This is Home Page</h1>}/>
            <Route path='/about' element={<h1>This is About Page</h1>}/>
            <Route path='/gallery' element={<h1>This is Gallery Page</h1>}/>
            <Route path='/test' element={<h1>This is About Testimonial</h1>}/>
            <Route path='/contact' element={<h1>This is About Contact Us</h1>}/>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App;