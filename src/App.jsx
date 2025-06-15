import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
import HelpPage from './pages/HelpPage'
import ContactPage from './pages/ContactPage'
import GratitudePage from './pages/GratitudePage'
import Support from './components/Support/Support'
import Confidentiality from './components/Confidentiality/Confidentiality'


const App = () => {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/helppage" element={<HelpPage/>} />
      <Route path="/contactpage" element={<ContactPage/>} />
      <Route path="/gratitude" element={<GratitudePage/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/сonfidentiality" element={<Confidentiality/>} />

    </Routes>
    
    </>
  )
}

export default App