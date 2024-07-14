import React from 'react'
import img from './career.jpg'

import ScrollButtonCareer from './ScrollButtonCareer'
import SectionCareer from './SectionCareer'
const Career = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <img className="object-cover w-full h-full" src={img} alt="Full screen" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
        <p className="text-lg md:text-base text-xs md:px-20 md:pb-6 opacity-80">
          <span className="block text-3xl">CAREERS</span>
        </p>
      </div>
    </div>
  )
}

export default Career
