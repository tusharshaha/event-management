import React from 'react';
import Breadcrumb from '../../../components/Shared/Breadcrumb';

const InnerBanner = () => {
  return (
    <div className='inner_banner relative flex items-center justify-center h-[300px] md:h-[700px] clip_path_top'>
      <div className='absolute w-full h-full bg-[#ca38ff31] top-0' />
      <div className="max-w-xl text-center ">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-white drop-shadow-lg shadow-black">
          Join Us
        </h1>
        <Breadcrumb name="Career" />
      </div>
    </div>
  );
};

export default InnerBanner;