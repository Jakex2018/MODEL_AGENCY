import React from "react";


const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src="/Assets/about-background.png" alt="" />
      </div>
      <div className="about-section-image-container">
        <img src="/Assets/about_image.png" alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
           Boost your modeling career with us
        </h1>
        <p className="primary-text">
        At ISIS AGENCY, we take pride in fostering successful careers in the modeling world. Our team of experienced and passionate professionals work hard to provide opportunities for talented women like you.
        </p>
        <p className="primary-text">
        Connect with us and find out how we can take your career to the next level.
        </p>
      </div>
    </div>
  );
};

export default About;
