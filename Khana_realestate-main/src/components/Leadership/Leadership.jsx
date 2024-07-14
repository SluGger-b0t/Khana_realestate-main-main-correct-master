import React from 'react'
import Navbar from '../Navbar';
import a from './leadership.jpg'
import First from './First';
import Section from './Section'
import Logo from '../../components/lg2.png'
import { Link } from 'react-router-dom';
const Leadership = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <div className="w-fit z-50 h-fit absolute top-0 left-1/2 transform -translate-x-1/2 ">
            <img src={Logo} alt="" className="w-24   z-50  " />
          </div>
        </Link>
      </div>
      <div className="sticky top-0   w-screen h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <div className="-mt-24">
        <First></First>
      </div>
      <div>
        <Section></Section>
      </div>
    </div>
  )
}

export default Leadership
