import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import SignIn from './components/SignIn'



const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/signin' element={<SignIn/>} />
    </Routes>
    </>
  )
}

export default App