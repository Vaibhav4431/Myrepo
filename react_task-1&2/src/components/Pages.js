import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

export default function Pages() {
  return (
    <div>
        <Navbar/>
      <NavLink to='/Pages/1'>Page-1</NavLink> <br/>
      <NavLink to='/Pages/2'>Page-2</NavLink> <br/>
      <NavLink to='/Pages/3'>Page-3</NavLink> <br/>
      <NavLink to='/Pages/4'>Page-4</NavLink> <br/>
      <NavLink to='/Pages/5'>Page-5</NavLink> <br/>
      <NavLink to='/Pages/6'>Page-6</NavLink> <br/>
      <NavLink to='/Pages/7'>Page-7</NavLink> <br/>
      <NavLink to='/Pages/8'>Page-8</NavLink> <br/>
      <NavLink to='/Pages/9'>Page-9</NavLink> <br/>
      <NavLink to='/Pages/10'>Page-10</NavLink> <br/>
    </div>
  )
}
