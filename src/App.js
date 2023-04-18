import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom';

import { Navbar,Header,Footer,Accesories,Cakes,Home,Login } from './components';
import Whatsapp from "./assets/whatsapp.png"

const App = () => {
  return (
    <div className=' bg-pink-100'>
      
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cakes" element={<Cakes/>}/>
            <Route path="/Accesories" element={<Accesories/>}/>
            <Route path="/Login" element={<Login/>} />
            
            
        </Routes>
        <div className='fixed bottom-0 right-0'>
          <a href=''><img src={Whatsapp} alt='Whatsapp' className=' md:w-28 w-24' /></a>
        </div>
      
    </div>
  )
}

export default App
