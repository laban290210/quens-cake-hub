import React from 'react'
import {NavLink} from "react-router-dom"

import Logo1 from '../../assets/logo2.png'
import Email from '../../assets/email.png'
import Facebook from '../../assets/facebook.png'
import Insta from '../../assets/instagram.png'
import Phone from '../../assets/phone.png'
import Tiktok from '../../assets/tiktok.png'
const footer = () => {
  return (
    <div class=" bg-[#D498CA] grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-4 gap-6 sm:px-8 px-5 relative  " >
      <div class=' sm: items-center'>
      <img  class='h-40 md:h-52 lg:h-60 w-40 mr-60 sm:w-60' src={Logo1} alt='logo1'/>
      </div>
      <div class= 'md:flex  md:gap-32 lg:gap-60 mt-10'>
        <div class='mb-10'>
          <h1 class='md:text-2xl font-bold font-[Alkatra]'>PRODUCTS</h1>
          <ul>
            <li class='font-bold'> CAKES </li>
            <li>Celebration Cakes</li>
            <li>Cupcakes</li>
            <li> Doughnuts</li>
            
          </ul>
        </div>
        <div class='mb-10'>
          <h1 class=' md:text-2xl font-bold font-[Alkatra]'>LOCATION</h1>
          <ul>
            <li class='font-bold'> Cakes </li>
            <li>Celebration Cakes</li>
            <li>Cupcakes</li>
            <li> Doughnuts</li>
            
          </ul>
        </div>

        
        <div 
         >
            <h1 class='justify-start md:text-2xl font-bold font-[Alkatra]' id='contacts'>  CONTACTS</h1>
          <div class='mt-4 sm:col-2'>
            <a className='flex' href=''>
            <img  class='h-6 ' src={Phone}  alt='Phone'/ >
            <h5>+254705640980</h5>
            </a>
          </div>
          <div class='mt-2 sm:col-2  md:mb-4 lg:mb-0'>
            <a className='flex' href=''>
              <img  class='h-6 mr-1' src={Email}  alt='Email'/ >
              <h5>info@queencakehub.com</h5>
            </a>
          </div>
          <ul class='mt-6 flex gap-4 sm:columns-3 sm:justify-center mb-5 '>
            <li class=''>
              <a href=''><img class=' h-10 md:h-12' src={Facebook} alt='facebook'/></a>
            </li>
              <a href=''><img class='h-10 md:h-12' src={Tiktok} alt='Tiktok'/></a>
            <li>
              <a href=''><img class='h-10 md:h-12' src={Insta} alt='Instagram'/></a>
            </li>
            
          </ul>

 
        </div >

      </div>


    </div>
    
  )
}

export default footer
