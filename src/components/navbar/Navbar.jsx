import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

import './navbar.css'
import Logo from '../../assets/logo1.png'


const Menu = () => (
  <>
    
      <li class="mx-6 font-unicaOne font-semibold  text-xl" >
        <NavLink to="/"  class="text-2xl " >HOME</NavLink>
      </li>
      <li class="mx-6 font-unicaOne font-semibold  text-xl">
        <NavLink to="/cakes" class="text-2xl font-[Poppins]" >CAKES</NavLink>
      </li>
      <li class="mx-6 font-unicaOne font-semibold  text-xl">
        <NavLink to="/accesories" class="lg:text-2xl font-[Poppins]" >ACCESORIES</NavLink>
      </li> 
      <li class="mx-6 font-unicaOne font-semibold  text-xl">
        <a href="#contacts"   >CONTACTS</a>
      </li>
        
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div class="p-4 bg-[#D498CA] flex items-center justify-between  mt-2 ml-4 mr-4  rounded-md h-13 ">
      <NavLink to="/" class="mr-1" >
        <img class="h-15 w-60 cursor-pointer" src={Logo} alt='logo' />
      </NavLink>
      <div>
        <ul class= "flex justify-start ml-20 items-center">
          <Menu />
        </ul>
      </div>
      <div class="flex">
        <div class="mr-4" >
          <NavLink to="/login">
            <button class="bg-[#8D3971] px-4 py-2 text-white rounded-full">LOGIN</button>
          </NavLink>
        </div>
        <div class ="mt-1" >
          {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />

          }
          {toggleMenu && (
            <div class ="absolute mt-8 right-[10px] bg-[#D498CA] shadow-lg shadow-[#D498CA]-500/50 rounded-2xl backdrop-blur-20 backdrop-blur-sm bg-[#D498CA]/50 ">
             <ul class = " mb-10 " >
              <li class="px-10 py-2   font-unicaOne font-semibold  text-xl " >
                <NavLink to="/"  class="text-2xl text-red-700 " >HOME</NavLink>
              </li>
              <li class="px-10 py-2  font-unicaOne  font-semibold text-xl  ">
                <NavLink to="/cakes" class="text-2xl font-sacramento" >CAKES</NavLink>
              </li>
              <li class="px-10 py-2  font-unicaOne  font-semibold text-xl  ">
                <NavLink to="/accesories" class="lg:text-2xl font-sacramento" >ACCESORIES</NavLink>
              </li> 
              <li class="px-10 py-2  font-unicaOne  font-semibold text-xl  ">
                <a href="#contacts"   >CONTACTS</a>
              </li>
             </ul>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
