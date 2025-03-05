import { useState } from 'react'
import {
  Routes, Route, Link
} from 'react-router-dom'
import HomePage from './components/Home'
import Messages from './components/Messages'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/messages'>Messages</Link>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
