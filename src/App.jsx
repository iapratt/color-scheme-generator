

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Header from './header.jsx'
import './App.css'
import Generator from './pages/generator.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App