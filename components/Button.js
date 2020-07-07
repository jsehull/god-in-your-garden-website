import React from 'react'

const Button = ({ text, link }) => {
  return (
    <button>
      <a href={link}>{text}</a>
    </button>
  )
}

export default Button
