import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import './Hero.css'
import image1 from '/img/a1.jpeg'
import image2 from '/img/a2.jpg'
import image3 from '/img/a3.jpg'

const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="7000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image2} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                FIND YOUR DREAM HOME
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                where Memories Begin
              </p>
              <p
                className="animated bounceInRight"
                style={{ animationDelay: '3s' }}
              >
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image1} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                ⁠DISCOVER PREMIUM LAND
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                Exceptional land, Exceptional opportunities With view properties
              </p>
              <p
                className="animated bounceInRight"
                style={{ animationDelay: '3s' }}
              >
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption">
              <h5
                className="animated bounceInRight"
                style={{ animationDelay: '1s' }}
              >
                LOCATE YOUR IDEAL COMMERCIAL PROPERTY
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '2s' }}
              >
                The best spaces for your business needs With view properties
              </p>
              <p
                className="animated bounceInRight"
                style={{ animationDelay: '3s' }}
              >
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>

        <div className="pn">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
