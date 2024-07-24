import React from 'react'

const HeroSection = ({
  mainHeading,
  paragraph,
  btnText,
  image
}) => {
  return (
  <>
  <div className="hero-main-section">
  <div className="hero-section-part1">
    <h1 className='fontSize55_black'>{mainHeading}</h1>
    <p className='fontSize18_darkGray'>{paragraph}</p>
    <button className='btn-style'>{btnText}<i class="fa-solid fa-angle-right"></i></button>
  </div>
  <div className="hero-section-part-2">
    <img src={image} alt=''/>
  </div>
  </div>
  </>
  )
}

export default HeroSection