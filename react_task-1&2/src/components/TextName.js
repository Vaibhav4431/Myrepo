import React from 'react'
import Navbar from './Navbar'

export default function TextName(props) {
  return (
    <div>
      <Navbar/>
      <h1 style={{textAlign:'center', color:'white',background:'grey'}}>{props.name}</h1>
    </div>
  )
}
