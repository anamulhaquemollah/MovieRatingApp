import React from 'react'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header'; 
import Home from "./components/home/Home"
import MovieDetails from "./components/moviedeails/MovieDetails"
import PageNotFount from "./components/pagenotfound/PageNotFound"
import Footer from "./components/footer/Footer"
import "./App.scss"

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
          <Route path="*" element={<PageNotFount/>} />
        </Routes>
      
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App