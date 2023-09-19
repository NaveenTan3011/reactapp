import React from 'react'

const Banner = (props) => {
  return (
   <div className="banner">
    <div className="container">
    <div className="banner_content">
        <h2>{props.heading}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque accusantium iure debitis perspiciatis sed culpa, commodi quis accusamus, ipsum, perferendis possimus hic voluptatum assumenda.</p>
    </div>
    </div>
   </div>
  )
}

export default Banner
