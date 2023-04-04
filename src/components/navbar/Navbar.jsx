import React from 'react'
import {NavLink} from "react-router-dom"

import './navbar.css'

import Logo from '../../assets/logo1.png'

const navbar = () => {
  return (
    <div class="p-4 bg-[#D498CA] flex items-center justify-between  mt-2 ml-4 mr-4  rounded-md h-13 ">
      <NavLink to="/" class="mr-1" >
        <img class="h-15 w-60 cursor-pointer" src={Logo} alt='logo' />
      </NavLink>
      <div>
        <ul class= "md:flex justify-start ml-20 md:items-center md:justify-end">
          <li class="mx-6" >
            <NavLink to="/"  class="text-2xl font-[Poppins]" >HOME</NavLink>
          </li>
          <li class="mx-6">
            <NavLink to="/cakes" class="text-2xl font-[Poppins]" >CAKES</NavLink>
          </li>
          <li class="mx-6">
            <NavLink to="/accesories" class="lg:text-2xl font-[Poppins]" >ACCESORIES</NavLink>
          </li> 
          <li class="mx-6">
            <a href="#contacts"   >CONTACTS</a>
          </li>
        </ul>
        
      </div>
      <div class="mr-6" >
        <NavLink to="/login">
          <button class="bg-[#8D3971] px-4 py-2 text-white rounded-full">LOGIN</button>
        </NavLink>
      </div>
   
    </div>
  )
}

export default navbar
