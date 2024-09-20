import React, { useState } from 'react';
import '../style/AboutUs.css';
import '../Styles.css'
import img1 from'../images/heroBackground.jpg'

const AboutUs = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="about-us-container">
      <div className="about-us-header">
        About Us
      </div>
      <div className="about-us-content">
        <div className="about-us-image">
          <img src={img1} alt="About Us" />
          </div>
        <div className="about-us-text">
          <h1><b>Elite Wheels</b></h1>
          <p>
            At Elite Wheels, we pride ourselves on offering the finest selection of luxury vehicles.
            Our commitment to excellence ensures that you have an unparalleled experience, from choosing
            your vehicle to enjoying it on the road. Discover more about our premium services and
            offerings as you explore our world of luxury.
            </p>
            <br></br>
            <p>
            {isReadMore
              ? "Elite Wheels is a premier luxury car dealership offering the finest selection of high-end vehicles. Our commitment to excellence ensures that you receive the best service and quality in every interaction."
              : "Elite Wheels is a premier luxury car dealership..."}
          </p>
          <button className="read-more-button" onClick={handleReadMore}>
            {isReadMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 