import React from 'react';
import ContainerBox from '../../../components/Shared/ContainerBox';
import logo from "../../../assets/Event/event1.jpg";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";

const JobSection = () => {
  // Sample job data
  const jobList = [
    {
      id: 1,
      title: 'Event Coordinator',
      company: "XYZ Company Ltd",
      location: 'New York, NY',
      jobType: "Full-time",
      description:
        'Are you a detail-oriented individual with excellent organizational skills? Join our team as an Event Coordinator and help execute flawless events from concept to completion.',
    },
    {
      id: 2,
      title: 'Creative Designer',
      company: "XYZ Company Ltd",
      location: 'Los Angeles, CA',
      jobType: "Full-time",
      description:
        'Are you a creative genius who can turn ideas into stunning visual experiences? We\'re looking for a Creative Designer to bring our clients\' visions to life through innovative designs and concepts.',
    },
    // Add more job listings here
  ];
  const benifits = [
    {
      icon: <IoFastFoodOutline />,
      title: "Catered Meals",
    },
    {
      icon: <MdOutlineWaterDrop />,
      title: "Health Care",
    },
    {
      icon: <BsDoorOpen />,
      title: "Flexible Environment",
    },
  ]
  return (
    <ContainerBox>
      <div className="max-w-4xl mx-auto py-40">
        <h1 className="text-3xl font-bold text-center mb-20">
          Why Work With Us
        </h1>

        {/* Why work with us */}
        <div className='flex items-center justify-between flex-wrap md:flex-nowrap gap-4'>
          {
            benifits.map((ele, i) => (
              <div className='' key={i}>
                <div className='flex items-center gap-2'>
                  <span className='text-4xl text-sky-500'>
                    {ele.icon}
                  </span>
                  <h4 className='text-2xl font-bold'>{ele.title}</h4>
                </div>
                <p className='mt-4 text-slate-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a ex, ipsam deserunt nemo qui minus ipsum fuga consequuntur quisquam..</p>
              </div>
            ))
          }
        </div>

        {/* Current Job Openings */}
        <h2 className="text-3xl text-center font-bold my-20">Current Job Opening</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobList.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-lg px-6 py-8"
            >
              <div className='flex items-center gap-6'>
                <img className='w-[70px] h-[70px]' src={logo} alt="" />
                <div>
                  <h3 className="text-xl font-bold">{job.company}</h3>
                  <p className="text-gray-600 font-semibold">{job.location}</p>
                </div>
              </div>
              <h3 className='mt-4 font-bold text-2xl'>{job.title}</h3>
              <p className='mb-4 font-bold text-green-600'>{job.jobType}</p>
              <p className="text-gray-700">{job.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <p><span className='text-2xl font-bold'>$5000</span><span className='text-slate-500 font-semibold'>/monthly</span></p>
                <button className="px-4 py-2 bg-sky-400 text-white rounded-full hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerBox>
  );
};

export default JobSection;