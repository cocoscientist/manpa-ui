import { useState } from 'react'
import {
  Routes, Route, Link
} from 'react-router-dom'
import HomePage from './components/Home'
import './css/style.css'
import Navigation from './components/Navigation'
import Redirect from './components/Redirect'
import Contact from './components/Contact'
import ArticleList from './components/ArticleList'
import ArticleViewer from './components/ArticleViewer'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/redirect' element={<Redirect/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs' element={<ArticleList/>}/>
        <Route path='/blog/:title' element={<ArticleViewer/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
