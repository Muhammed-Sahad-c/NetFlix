import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Movies from './Movies'

 


function home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Movies></Movies>
    </>
  )
}

export default home