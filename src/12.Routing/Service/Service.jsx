import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../index.css"

export default function Service() {
  return (
    <>

    <div className='d-flex flex-column'>
    <NavLink to={"/service/Bike"}>Bike</NavLink>
    <NavLink to={"/service/Car"}>Car</NavLink>
    </div>

    {/* <h1>Service</h1> */}

    <Outlet/>
    </>
  )
}
 