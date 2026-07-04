import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Notes from './Pages/Notes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Course from './Pages/Course'
// import Button from './Components/Button'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Course/>}/>
        <Route path='/notes' element={<Notes/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      {/* <Button/> */}
      <Footer />
    </div>
  )
}

export default App