// src/components/Header.js
import React from 'react'
import './Header.css'
import a from '../../tt.jpg'

const Header = () => {
  return (
    <>
      <div className="main-comp">
        <div className="flex flex-col items-center justify-center h-screen relative">
          <img
            className="object-cover w-full h-full z-24"
            src={a}
            alt="Full screen"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="text-lg md:text-base text-xs md:px-20 md:pb-6 opacity-60">
              <span className="block">GOTETY RESIDENCY</span>
            </h1>
          </div>
        </div>

        <header className="header">
          <div className="header-content">
            <h1 className="name">GOTETY RESIDENCY</h1>
            <p>Valasaravakkam, Chennai(All)</p>
          </div>
          <div className="header-buttons">
            <button>
              <p className="btn-txt">CONTACT US</p>
            </button>
            <button>
              <p className="btn-txt">DOWNLOAD BROCHURE</p>
            </button>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
