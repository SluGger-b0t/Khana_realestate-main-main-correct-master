import React, { useState } from 'react'

const Scroll = () => {
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
    <div className="mt-10 sm:flex flex-col hidden sm:flex-row  justify-center">
      <button
        className={`text-zinc-400 ml-6 px-4 py-2 mr-14  border-b-2 border border-t-transparent border-l-transparent border-r-transparent w-52 focus:outline-none ${
          activeButton === 1 ? 'border-blue-500  text-black' : ''
        }`}
        onClick={() => handleClick(1)}
      >
        ABOUT OUR FOUNDER
      </button>
      <button
        className={`mr-14 ml-14 text-zinc-400 border-t-transparent border-l-transparent border-r-transparent w-52  px-4 py-2 mx-2 border-b-2 border focus:outline-none ${
          activeButton === 2 ? 'border-blue-500  text-black' : ''
        }`}
        onClick={() => handleClick(2)}
      >
        CHAIRMAN'S MESSAGE
      </button>
      <button
        className={`ml-20 text-zinc-400 border-t-transparent border-l-transparent border-r-transparent w-52  px-4 py-2 mx-2 border-b-2 border  focus:outline-none ${
          activeButton === 3 ? 'border-blue-500  text-black' : ''
        }`}
        onClick={() => handleClick(3)}
      >
        OUR LEADERSHIP
      </button>
    </div>
  )
}

export default Scroll
