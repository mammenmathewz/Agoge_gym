import React from 'react'
import Navbar from '../components/NavBar'
import { FeaturesSectionDemo} from '../components/OfferCards'
import { BackgroundLinesDemo } from "../components/Heading";
import Footer from '../components/Footer';


function Offers() {
  return (
    <>
    <div className='bg-black'>
    <Navbar/>
    <BackgroundLinesDemo heading={'PLANS'} sub={"Two Day free guest pass & personal training..."}/>
    <FeaturesSectionDemo/>
    <Footer/>
    </div>
  
    </>
  )
}

export default Offers