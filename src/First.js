import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pageComponents/Home"
import About from './pageComponents/Abouts'
import Services from './pageComponents/Services'
import {Routes, Route} from "react-router-dom"
import "./CSS/style.css"
import Contact from './pageComponents/Contact';
import Cart from './components/Cart';
import Shopping from './pageComponents/Shopping'
import Storage from './pageComponents/Storage';

const First = () => {
  const [select, setSelect] = useState([]);



  return (
    <>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Services" element={<Services/>} />
        <Route exact path="/:username" element={<Contact/>} />
        <Route exact path="/Shopping" element={<Shopping select={select} setSelect={setSelect}/>} />
        <Route exact path="/Cart" element={<Cart selectedItems={select}/>} />
        <Route exact path="/Storage" element={<Storage/>} />

    </Routes>
    </>
  )
}

export default First
