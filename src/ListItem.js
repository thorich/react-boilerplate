import React from 'react'

export default function(props) {
  return (
    <li className="person">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </li>
  )
}
