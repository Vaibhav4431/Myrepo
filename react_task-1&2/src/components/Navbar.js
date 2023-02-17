import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="container">
        <NavLink to='/' className="mx-3">Home</NavLink>
        <NavLink to='/TextName' className="mx-3">TextName</NavLink>
        <NavLink to='/Buttons' className="mx-3">Buttons</NavLink>
        <NavLink to='/Pages' className="mx-3">Pages</NavLink>
      </div>
    </>
  );
}
