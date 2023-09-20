import React from 'react'

const MainButton = ({name, onClick}) => {
  return (
    <div className="Buttons">
        <button onClick={onClick}>{name}</button>
    </div>
  )
}

export default MainButton
