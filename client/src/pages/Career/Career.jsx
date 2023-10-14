import React from 'react';
import InnerBanner from './components/InnerBanner';
import JobSection from './components/JobSection';
import Opportunity from './components/Opportunity';

const CareerPage = () => {

  return (
    <div className='bg-gray-100'>
      <InnerBanner />
      <JobSection />
      <Opportunity />
    </div>
  );
};

export default CareerPage;
