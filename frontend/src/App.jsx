import React from 'react'
import Navbar from './componenets/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>

  )
}

export default App