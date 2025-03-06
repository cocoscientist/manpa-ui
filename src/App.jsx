import { useState } from 'react'
import {
  Routes, Route, Link
} from 'react-router-dom'
import HomePage from './components/Home'
import './css/style.css'
import Navigation from './components/Navigation'
// import Messages from './components/Messages'
// import About from './components/About'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/app' element={<HomePage/>}/>
        {/* <Route path='/messages' element={<Messages/>}/>
        <Route path='/about' element={<About/>}/> */}
      </Routes>
    </>
  )
}

export default App
