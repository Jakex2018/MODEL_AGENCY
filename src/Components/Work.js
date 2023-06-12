import React from "react";


const Work = () => {
  const workInfoData = [
    {
      image: "/Assets/cv.png",
      title: "CV",
      text: "No Skills Required : You don’t need to have any upfront skills to get started, we’ll teach you everything you need to be successful.",
    },
    {
      image: "/Assets/dress.png",
      title: "High quality dresses",
      text: "Try our variety of dresses to enhance your image on the runway. ",
    },
    {
      image: "/Assets/planet.png",
      title: "Experience the world of modeling",
      text: "Experience around the world to be a professional model",
    },
  ];
  return (
    <div className="work-section-wrapper" id="getjob">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Thanks to our strong industry connections we offer our models a wide
          range of exciting opportunities.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
