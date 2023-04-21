import React from 'react'
import { Footer, Navbar } from '..'
import Cake from "../../assets/cake.jpeg"

const Cakes = () => {
  return (
    <div>
      <Navbar />
      <div class="my-3 mx-3">
        <ul class=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  md:gap-5" >
          <li class=" border-solid border-2 border-pink-400 rounded-2xl mb-3 hover:bg-pink-200 cursor-pointer ">
            <img className=' h-3/4 w-full rounded-t-2xl' src={Cake} alt='Cake' />
            <div className=' '>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Chocolate Cake</h4>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Price per Kg: KSh 1000 </h4>
            </div>
          </li>
          <li class=" border-solid border-2 border-pink-400 rounded-2xl mb-3 hover:bg-pink-200 cursor-pointer ">
            <img className=' h-3/4 w-full rounded-t-2xl' src={Cake} alt='Cake' />
            <div className=' '>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Chocolate Cake</h4>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Price per Kg: KSh 1000 </h4>
            </div>
          </li>
          <li class=" border-solid border-2 border-pink-400 rounded-2xl mb-3 hover:bg-pink-200 cursor-pointer ">
            <img className=' h-3/4 w-full rounded-t-2xl' src={Cake} alt='Cake' />
            <div className=' '>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Chocolate Cake</h4>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Price per Kg: KSh 1000 </h4>
            </div>
          </li>
          <li class=" border-solid border-2 border-pink-400 rounded-2xl mb-3 hover:bg-pink-200 cursor-pointer ">
            <img className=' h-3/4 w-full rounded-t-2xl' src={Cake} alt='Cake' />
            <div className=' '>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Chocolate Cake</h4>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Price per Kg: KSh 1000 </h4>
            </div>
          </li>
          <li class=" border-solid border-2 border-pink-400 rounded-2xl mb-3 hover:bg-pink-200 cursor-pointer ">
            <img className=' h-3/4 w-full rounded-t-2xl' src={Cake} alt='Cake' />
            <div className=' '>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Chocolate Cake</h4>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Price per Kg: KSh 1000 </h4>
            </div>
          </li>
          <li class=" border-solid border-2 border-pink-400 rounded-2xl mb-3 hover:bg-pink-200 cursor-pointer ">
            <img className=' h-3/4 w-full rounded-t-2xl' src={Cake} alt='Cake' />
            <div className=' '>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Chocolate Cake</h4>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Price per Kg: KSh 1000 </h4>
            </div>
          </li>
          <li class=" border-solid border-2 border-pink-400 rounded-2xl mb-3 hover:bg-pink-200 cursor-pointer ">
            <img className=' h-3/4 w-full rounded-t-2xl' src={Cake} alt='Cake' />
            <div className=' '>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Chocolate Cake</h4>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Price per Kg: KSh 1000 </h4>
            </div>
          </li>
          <li class=" border-solid border-2 border-pink-400 rounded-2xl mb-3 hover:bg-pink-200 cursor-pointer ">
            <img className=' h-3/4 w-full rounded-t-2xl' src={Cake} alt='Cake' />
            <div className=' '>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Chocolate Cake</h4>
              <h4 class='mt-1 ml-3 font-unicaOne font-semibold text-lg md:text-xl'>Price per Kg: KSh 1000 </h4>
            </div>
          </li>
          
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Cakes
