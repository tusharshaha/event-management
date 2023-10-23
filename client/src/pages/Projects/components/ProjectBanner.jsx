import React from "react";
import banner from "../../../assets/banner/projectBanner.jpg";

const ProjectBanner = () => {
  return (
    <div className="mt-20">
      <img src={banner} alt="Your Image" className="w-full h-auto" />
    </div>
  );
};

export default ProjectBanner;
