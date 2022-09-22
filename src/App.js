import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Rent from './pages/Rent'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`./data.json`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/rent/:id" element={<Rent data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
