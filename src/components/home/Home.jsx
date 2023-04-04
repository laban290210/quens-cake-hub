import React from 'react'
import { Navbar, Footer } from '..'
import {default as Header} from '../header/Header'

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="h-screen"></div>
      <Footer/>
    </div>
  )
}

export default home
