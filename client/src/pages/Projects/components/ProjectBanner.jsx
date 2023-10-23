import React from 'react';
import about from '../../../assets/banner/banner3.png'

const ProjectBanner = () => {
  return (
    <div className="">
        <div className="relative">
        <img src="https://cdn.pixabay.com/photo/2022/02/15/06/53/band-7014366_1280.jpg" alt="Your Image" className="w-full rounded-b-full" />
        <div className="absolute rounded-b-full inset-0 bg-gradient-to-b from-gray-500 to-black opacity-30"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/4">
            <h2 className="text-white text-center lg:text-5xl text-4xl font-semibold">
            Elevate Your Events with Us
            </h2>
            <p className="text-xl mt-4 md:text-xl text-center text-white">
            Creating unforgettable experiences for every occasion.
          </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectBanner;
