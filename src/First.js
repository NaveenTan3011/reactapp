import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pageComponents/Home"
import About from './pageComponents/Abouts'
import Services from './pageComponents/Services'
import {Routes, Route} from "react-router-dom"
import "./CSS/style.css"
import Contact from './pageComponents/Contact';
import Cart from './components/Cart';
import Shopping from './pageComponents/Shopping';

const First = () => {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Services" element={<Services/>} />
        <Route exact path="/:username" element={<Contact/>} />
        <Route exact path="/Shopping" element={<Shopping/>} />
        <Route exact path="/Cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default First