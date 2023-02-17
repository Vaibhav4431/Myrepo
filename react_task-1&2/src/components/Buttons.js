import React from 'react'
import { useHref } from 'react-router-dom'
import Navbar from './Navbar'
import TextName from './TextName'

export default function Buttons(props) {
  return (
    <div>
        <Navbar/>
      <button type="button" className="btn btn-primary">Click me</button>
    </div>
  )
}
