import React from 'react'
import a from './leadership.jpg'
import Scroll from './Scroll'
const First = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <img className="object-cover w-full h-full z-24" src={a} alt="Full screen" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
        <p className="text-lg md:text-base text-xs md:px-20 md:pb-6 opacity-60">
          <span className="block">LEADERSHIP</span>
          <span className="block">
            The diversified portfolio of KHANNA REALESTATE is well-supported by
            a visionary leadership team which not only sets a compelling vision
            but is also responsible for operative management of the business.
          </span>
        </p>
      </div>
    </div>
  )
}

export default First
