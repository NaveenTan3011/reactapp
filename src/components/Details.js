import React from 'react'
import Button from './Button'

const Details = (props) => {
  return (
    <>
    <div className="details">
        <div className="container">
        <div className="details_content">
        <h2>{props.heading}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolore id ratione ipsam ex accusamus maxime tempore, asperiores temporibus ut enim velit quis unde neque?</p>
        <Button name="Know More"/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Details
