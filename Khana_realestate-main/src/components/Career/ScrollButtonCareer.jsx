// ScrollButtons.js
import React, { useState } from 'react'

const ScrollButtonCareer = () => {
  const [activeButton, setActiveButton] = useState(null)

  const handleClick = (buttonId) => {
    const section = document.getElementById(`section-${buttonId}`)
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    })
    setActiveButton(buttonId)
  }

  return (
    <div className="mt-10 flex  flex-row   justify-center">
      <button
        className={`text-zinc-400 md:ml-6 md:px-4 md:py-2 md:mr-14  border-b-2 border border-t-transparent border-l-transparent border-r-transparent w-52 focus:outline-none ${
          activeButton === 1 ? 'border-blue-500 text-black' : ''
        }`}
        onClick={() => handleClick(1)}
      >
        MOTTO
      </button>
      <button
        className={`md:mr-14 md:ml-14 text-zinc-400 border-t-transparent border-l-transparent border-r-transparent w-52   md:px-4 md:py-2 md:mx-2 border-b-2 border focus:outline-none ${
          activeButton === 2 ? 'border-blue-500 text-black' : ''
        }`}
        onClick={() => handleClick(2)}
      >
        CURRENT OPENINGS
      </button>
    </div>
  )
}

export default ScrollButtonCareer
