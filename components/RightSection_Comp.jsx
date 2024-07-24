import React from 'react'

const RightSection_Comp = ({
    mainHeading,
    paragraph,
    btnText,
    image,
    subHeading
}) => {
  return (
  <>
   <div className="right-main-section">
   <div className="right-section-part-1">
    <img src={image} alt=''/>
  </div>
  <div className="right-section-part-2">
    <h1 className='fontSize48_black'>{mainHeading} <h1 className='fontSize48_green'>{subHeading}</h1> </h1>
    <p className='fontSize18_Gray'>{paragraph}</p>
    <button className='btn-style'>{btnText}<i class="fa-solid fa-angle-right"></i></button>
  </div>
 
  </div>
  </>
  )
}

export default RightSection_Comp