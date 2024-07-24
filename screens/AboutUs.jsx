import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { imagePath } from '../constants/imagePath'
import HeroSection from '../components/HeroSection'
import RightSection_Comp from '../components/RightSection_Comp'

const AboutUs = () => {
  return (
   <>
     <Navbar/>
      <div className="container-fluid">
        <div className="about-main-section">
          <div className="container">

          <HeroSection
              mainHeading="Building Trust, Delivering Excellence"
              paragraph="AngiesHelpers.com specializes in short-term and long-term rental management. Our experts maximize your rental income and ensure guest satisfaction with local expertise and 24/7 offshore support. We offer comprehensive, tailored management solutions."
              btnText="Get Started Now"
              image={imagePath.Hero_Img_2}
            />

            <RightSection_Comp
              mainHeading="Your Trusted Partner in"
              subHeading="Rental Management"
              paragraph="At AngiesHelpers.com, we aim to provide property owners with hassle-free, profitable rental management. Founded by industry experts, we blend local knowledge and offshore support to offer top-tier services for both short-term Airbnb rentals and long-term leases. Our commitment to excellence ensures optimized listings and seamless guest experiences."
              btnText="Get Started Now"
              image={imagePath.Rental_Management}
            />
       
          </div>
          </div>
          </div>
          <Footer/>
   </>
  )
}

export default AboutUs