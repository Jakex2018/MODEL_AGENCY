import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Instagram } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Service = () => {
  return (
    <div className="work-section-wrapper" id="service">
      <div className="work-section-top">
        <p className="primary-subheading">Our Service</p>
        <h1 className="primary-heading">what do we offer?</h1>
        <p className="primary-text">
          We specialize in the representation and management of talented models
          of all ages and profiles. Our experienced team of agents works hard to
          develop the careers of our models, ensuring exciting and lucrative
          opportunities in the modeling industry.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <div className="box">
          <Instagram className="box-icon" />
          <p>
            Build your social media : We have perfected the exact blueprint to
            rapidly grow social media accounts and we utilize the same blueprint
            for all of our models, all you need to do is follow our
            instructions.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Social Media</h2>
        </div>
        <div className="box">
          <FavoriteIcon className="box-icon" />
          <p>
            Adapting to your situation : Regardless of where you are as a model,
            whether you're experienced or brand new, we’ll create a tailor-made
            game plan for you to hit your financial goals!.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Adapting to your situation</h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
