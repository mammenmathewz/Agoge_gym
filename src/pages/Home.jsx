import React from 'react'
import Navbar from '../components/NavBar'
import HomePage from '../components/HomeBody'
import Footer from '../components/Footer'
import TopBar from '../components/TopNavBar'

function Home() {
  return (
    <>
    {/* <TopBar/> */}
    <Navbar/>
    <HomePage/>
    <Footer/>
    </>
  )
}

export default Home