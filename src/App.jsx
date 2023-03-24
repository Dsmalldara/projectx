import { useState } from 'react'
import './App.css'
import {} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Home'/>
      <Route path='/About'/>
      <Route path='/Contact'/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
