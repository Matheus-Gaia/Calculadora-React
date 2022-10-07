import React from 'react'
import "./Button.css"

const Button = ({ valor }) => {
  return (
    <button className="Button">{valor}</button>
  )
}

export default Button