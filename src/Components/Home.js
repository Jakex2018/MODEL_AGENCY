import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src="/Assets/home-banner-background.png" alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
              Go out to relax your beauty
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <a href="#contact">
            <button className="secondary-button">
              Contact Us <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src="/Assets/home_image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
