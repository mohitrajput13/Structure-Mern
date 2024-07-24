import React from 'react'

const Cards = ({
  image,
  cardTitle,
  cardDescription
}) => {
  return (
    <>
    <div className="card">
  <img src={image}  alt="cards"/>
  <div className="card-content">
    <h1 className="fontSize24_black">{cardTitle}</h1>
    <p className="fontSize16_gray">{cardDescription}</p>
  </div>
</div>
    </>
  )
}

export default Cards