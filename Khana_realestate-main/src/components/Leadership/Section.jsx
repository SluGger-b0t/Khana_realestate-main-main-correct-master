import React from 'react'
import Scroll from './Scroll'
import a from '../../../public/leader1.avif'
import b from '../../../public/leader.jpg'
import Footer from '../Footer/Footer'
const Section = () => {
  return (
    <div>
      <Scroll></Scroll>
      <div
        id="section-1"
        className="mt-10 flex flex-col md:flex-row  sm:h-[600px]  bg-lightblue"
      >
        <div className="md:w-1/2 sm:w-1/2  mx-auto flex justify-center md:justify-center ">
          <img
            src={a}
            alt="Image"
            className="sm:mx-16 sm:w-3/5 sm:h-fit h-[400px] md:h-[500px]  md:ml-20 hover:scale-105 duration-150"
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-4 ml-5 ">
          <div className="text-3xl flex justify-center font-semi-bold">
            ABOUT OUR FOUNDER
          </div>
          <div className="scrollable-text overflow-auto max-h-80 md:mt-6 md:mx-6 text-abttextclr">
            <p className="px-0 ">
              Khanna Realestate epitomizes “passion at work” in totality. For us
              it is not only a catch phrase which sounds just right, rather we
              all strive to live it daily. It serves as our compass which guides
              us towards creating world class quality products and workmanship.
              It guides us to be transparent in all our dealings and adhere to
              delivery on time, each time. We draw heavily from the innate
              qualities of our founder in imbibing and actually living the
              brand. Simply put, this means that we do not cut corners towards
              making best in – class products. Our work revolves around creating
              ‘quality’ with immense passion. As we peep into the future, we
              remain firmly committed towards creating urban living spaces where
              people can live, work and play smart.
              <br />
              <br /> We are acutely conscious of the fact that due to rapid
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
        className="flex flex-col md:flex-row h-screen bg-lightgreen mt-[120px] md:mt-14"
      >
        <div className="md:w-1/2 flex justify-center md:order-2 h-3/4 ">
          <img
            src={b}
            alt="Image"
            className="sm:w-2/3 hover:scale-95  duration-150 w-full h-full scale-90 "
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 md:order-1 md:pl-4 ">
          <div className="text-3xl flex justify-center font-semi-bold">
            {' '}
            MESSAGE FROM OUR CHAIRMAN
          </div>
          <p className="scrollable-text overflow-auto max-h-80 md:mt-6 md:mx-6 text-abttextclr">
            Backward integration is what drives the organisation's turnkey
            projects. In a turnkey scenario, we bring the expertise of all our
            divisions to focus on every single aspect of a project. In other
            words, everything from precision engineering to aesthetic design and
            from quality metal glazing to high-class interiors is done
            in-house.br
            <br />
            <br />
            This allows for stringent control on quality, which in turn gives
            our customers a fine combination of precision and aesthetics.
            <br />
            <br />
          </p>
        </div>
      </div>
      {/*  <div
        id="section-3"
        className="h-screen mt-10 bg-lightpink  mx-auto  relative w-full"
      >
        Section 3
      </div> */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Section
