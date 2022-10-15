import React from 'react'
import "./Button.css"

const Button = ({ valor, handleClick }) => {
  return (
    <button className="Button" onClick={() => handleClick(valor)}>{valor}</button>
  )
}

export default Button