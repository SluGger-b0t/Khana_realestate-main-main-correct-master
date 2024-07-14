import React from 'react'
import img from '../../tt.jpg'

import ScrollButtons from './ScrollButton'
import Sections from './Sections'
const Philosophy = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <img
        className="object-cover w-screen h-screen"
        src={img}
        alt="Full screen"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
        <p className="text-lg md:text-base text-xs md:px-20 md:pb-6 opacity-80">
          <span className="block">PHILOSOPHY At KHANNA REALESTATE</span>
          <span className="block">
            We have always strived for benchmark quality, customer-centric
            approach, robust engineering, in-house research, uncompromising
            business ethics, timeless values, and transparency in all spheres of
            business conduct. This has helped us in becoming the most preferred
            real estate brand in India.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Philosophy
