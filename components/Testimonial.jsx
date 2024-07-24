import React from "react";
import { imagePath } from "../constants/imagePath";

const Testimonial = ({
    userName,
    place,
    feedback,
    image
}) => {
  return (
    <>
      <div className="testimonials-card">
        <img src={imagePath.Double_Qoutes} alt="" />
        <p className="fontSize22_white">
       {feedback}
        </p>
        <div className="testimonial-user">
            <img src={image} alt="" />
            <div className="user-name">
               <b>  <h3 className="fontSize22_white_regular">{userName}</h3></b>
                <h5 className="fontSize18_Green">{place}</h5>
            </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
