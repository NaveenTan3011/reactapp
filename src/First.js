import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pageComponents/Home"
import About from './pageComponents/Abouts'
import Services from './pageComponents/Services'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import "./CSS/style.css"
import Contact from './pageComponents/Contact';

const First = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Services" element={<Services/>} />
        <Route exact path="/:username" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default First
