import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './carousel.css'
import img1 from './../public/carpic1.jpg'
import img2 from './../public/carpic2.avif'
import img3 from './../public/carpic3.webp'
import img4 from './../public/carpic4.jpg'
import img5 from './../public/carpic5.jpg'
import Footer from './components/Footer/Footer'

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="carousel px-8 ">
        <Slider {...settings} className="w-full ">
          <div className="box ">
            <img className="" src={img1} alt="Not Found" />
          </div>
          <div className="box">
            <img src={img2} className="" alt="Not Found" />
          </div>
          <div className="box">
            <img src={img3} alt="Not Found" />
          </div>
          <div className="box">
            <img src={img4} className="" alt="Not Found" />
          </div>
          <div className="box">
            <img src={img5} className="" alt="Not Found" />
          </div>
        </Slider>
        <br />
        <br />
        <br />
      </div>
      <Footer></Footer>
    </>
  )
}

export default Carousel
