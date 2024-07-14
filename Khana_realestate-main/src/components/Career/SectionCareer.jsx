import React from 'react'
import a from '../../phil/d.jpeg'
import b from '../../phil/a.jpeg'
import c from '../../phil/asth.jpg'
import './SectionCareer.css'
import Fotter from '../Footer/Footer'
import ScrollButtonCareer from './ScrollButtonCareer'
const Sections = () => {
  return (
    <div>
      <ScrollButtonCareer></ScrollButtonCareer>
      <div
        id="section-1"
        className="mt-10 flex flex-col justify-center w-70 md:flex-row h-1/2 bg-lightblue"
      >
        {/* <div className="md:w-1/2  flex md:justify-center ">
          <img
            src={a}
            alt="Image"
            className="sm:mx-16 sm:w-full md:ml-20 hover:scale-105 duration-150"
          />
        </div> */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-4 ml-5 ">
          <div className="text-3xl flex justify-center font-light">MOTTO</div>
          <div className="scrollable-text overflow-auto  max-h-80 md:mt-6 md:mx-6">
            <p className="px-0" id="txt">
              KHANNA REALESTATE is one of India’s leading real estate entities. We are the
              only real estate company in India to have a full-fledged backward
              integration model. We come with a reputation of building some of
              the finest residential and contractual projects in India. Our
              corporate clientele includes multinationals such as Infosys, HP,
              DELL, Bosch, Biocon and Timken. In order to meet the growing
              demand for quality construction, we are continuously on the
              lookout for talent to help us maintain our reputation as the
              nation’s most reliable, quality builder. Today, we have a staff
              strength of over 3000 people and a full-fledged academy to impart
              training on different technical and behavioural aspects.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div
        id="section-2"
        className="flex flex-col justify-center mt- md:flex-row h-1/2 bg-lightgreen md:mt-14"
      >
        {/* <div className="md:w-1/2 md:order-2 h-3/4 ">
          <img
            src={b}
            alt="Image"
            className="sm:w-full hover:scale-95  duration-150 w-full h-full scale-90 "
          />
        </div> */}
        {/* Text */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-4 ml-5 ">
          <div className="text-3xl flex justify-center font-light">
            {' '}
            CURRENT OPENINGS
          </div>
          <p
            className="scrollable-text justify-center text-center overflow-auto max-h-80 md:mt-6 md:mx-6"
            id="txt"
          >
            No current openings available.
          </p>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  )
}

export default Sections
