import axios from 'axios';
import React, { useEffect } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import MainButton from '../components/MainButton';

const ApiCall = () => {
  const [color, setColor] = useState("red")
  const handleColor = () =>{
    setColor("blue")
  }
  
  return (
    <>
    <h2>my fvrt color {color}</h2>
    <button onClick={handleColor}>change color</button>

     
          
    </>
  )
}

export default ApiCall
