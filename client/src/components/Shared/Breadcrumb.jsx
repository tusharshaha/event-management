import React from 'react';
import { BiSolidHome, BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom"

const Breadcrumb = ({ name }) => {
  return (
      <nav className='relative z-10 py-4'>
        <ul className='flex items-center justify-center gap-2 text-white text-base'>
          <li className='drop-shadow-lg'><Link to="/"><BiSolidHome /></Link></li>
          <li className='drop-shadow-lg'><BiPlay /></li>
          <li className='drop-shadow-lg'><Link to="/" className='hover:underline'>Home</Link></li>
          <li className='drop-shadow-lg'><BiPlay /></li>
          <li className='drop-shadow-lg'>{name}</li>
        </ul>
      </nav>
  );
};

export default Breadcrumb;