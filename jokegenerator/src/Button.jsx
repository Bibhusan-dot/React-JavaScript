import React from 'react'
import './Button.css'
const Button = (props) => {
  return<button onClick={props.callApi}>
        <P>Click to generate a joke.</P>
  </button>
}

export default Button
