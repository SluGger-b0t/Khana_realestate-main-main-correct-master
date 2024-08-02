import React from 'react'
import a from '../../phil/d.jpeg'
import b from '../../phil/a.jpeg'
import c from '../../phil/asth.jpg'
import './Section.css'
import Fotter from '../Footer/Footer'
import ScrollButtons from './ScrollButton'
const Sections = () => {
  return (
    <div>
      <ScrollButtons></ScrollButtons>
      <div
        id="section-1"
        className="mt-10 flex flex-col md:flex-row h-1/2 bg-lightblue"
      >
        <div className="md:w-1/2  flex md:justify-center ">
          <img
            src={a}
            alt="Image"
            className="sm:w-full hover:scale-95  duration-150 w-full h-full scale-90 "
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-4 ml-5 ">
          <div className="text-3xl flex justify-center font-light">
            PASSION AT WORK
          </div>
          <div className="scrollable-text overflow-auto max-h-80 md:mt-6 md:mx-6">
            <p className="px-0" id="txt">
              Khanna Real Estate Solutions is a customer-centric consultancy,
              committed to redefining your real estate experience. What sets us
              apart is our unwavering dedication to prioritizing your needs.
              With a focus on delivering personalized solutions, we ensure that
              your requirements take center stage. Our distinctiveness lies in
              securing the best pricing for our clients, making every
              transaction a value-driven success. At Khanna Real Estate
              Solutions, your satisfaction is not just a goal – it's our
              commitment.
              <br />
              <br /> We peep into the future, we remain firmly committed towards
              creating urban living spaces where people can live, work and play
              smart. We are acutely conscious of the fact that due to rapid
              urbanization, there are huge challenges and as responsible real
              estate player we shall continue to provide intelligent solutions
              in a manner which is sustainable. We rely on our people, their
              capacities to innovate and use of technology to create immense
              value for all our stakeholders. We will continue to raise the bar
              and set new standards in the industry to strengthen this goal of
              ours.{' '}
            </p>
          </div>
        </div>
      </div>
      <div
        id="section-2"
        className="flex flex-col md:flex-row h-1/2 bg-lightgreen md:mt-14"
      >
        <div className="md:w-1/2 md:order-2 h-3/4 ">
          <img
            src={b}
            alt="Image"
            className="sm:w-full hover:scale-95  duration-150 w-full h-full scale-90 "
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-4 ml-5 ">
          <div className="text-3xl flex justify-center font-light">
            {' '}
            OUR WAY
          </div>
          <p
            className="scrollable-text overflow-auto max-h-80 md:mt-6 md:mx-6"
            id="txt"
          >
            Khanna Real Estate Solutions is a premier consultancy firm
            specializing in residential and commercial real estate. Our
            dedicated team provides expert guidance, personalized strategies,
            and market insights to empower clients in making informed decisions.
            Whether you're buying, selling, or investing, we navigate the
            complexities of the real estate landscape, ensuring seamless
            transactions and maximizing value for our clients.
            <br />
            <br />
            This allows for stringent control on quality, which in turn gives
            our customers a fine combination of precision and aesthetics.
            <br />
            <br />
            In the long term, Khanna Real Estate Solutions aspires to be the
            guiding light for individuals and businesses in their pursuit of
            dream homes and lucrative commercial investments. Our vision is to
            extend our reach and expertise, touching the lives of as many people
            as possible by facilitating seamless and gratifying real estate
            journeys. We aim to become the go-to consultancy that turns dreams
            into reality, fostering a community where everyone finds their
            perfect home or investment, contributing to lasting fulfillment and
            prosperity.
          </p>
        </div>
      </div>
      <div
        id="section-3"
        className="h-3/4 mt-10 bg-lightpink md:w-3/4 mx-auto  relative w-full"
      >
        {/* Image */}
        <img src={c} alt="Image" className="w-full h-auto filter grayscale" />
        {/* Text */}
        <div className="absolute inset-0 flex items-center md justify-center text-center text-amber-50">
          <div className=" flex flex-col">
            <div className="sm:text-2xl md:text-4xl sm:mt-0  mt-14 text-xs flex flex-col  justify-center font-light font-serif">
              <div className="py-2  lg:py-8"> VISION</div>
              <div className="py-2 lg:py-2">
                TRANSFORM THE WAY PEOPLE PERCEIVE ‘QUALITY’
              </div>
            </div>
            <div className="sm:text-3xl flex-col md:text-4xl text-xs flex justify-center font-light font-serif">
              <div className="md:py-2 lg:py-4"> MISSION</div>
              <div className="lg:py-4">NO SHORTCUTS TO QUALITY</div>
            </div>
            <div className="sm:text-3xl md:text-4xl text-xs m-10 mt-4 flex flex-col ">
              <div className="py-2 md:py-0 lg:py-2">PHILOSOPHY</div>
              <div className="py-2 md:py-0 lg:py-2">PASSION AT WORK</div>
            </div>
          </div>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  )
}

export default Sections
