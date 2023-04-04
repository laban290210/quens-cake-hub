import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom';

import { Navbar,Header,Footer,Accesories,Cakes,Home,Login } from './components';

const App = () => {
  return (
    <div>
      
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cakes" element={<Cakes/>}/>
            <Route path="/Accesories" element={<Accesories/>}/>
            <Route path="/Login" element={<Login/>} />
            
            
        </Routes>
        
      
    </div>
  )
}

export default App
