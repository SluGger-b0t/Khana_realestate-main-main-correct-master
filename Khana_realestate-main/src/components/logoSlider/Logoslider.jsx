import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled, { keyframes, css } from 'styled-components'
import './logoslider.css'
function Logoslider() {
  // const row1 = [
  //   './afcons.png',
  //   './gamon.png',
  //   './gmr.jpg',
  //   './hcc.png',
  //   './lnt.png',
  //   './rel.png',
  //   './SP.webp',
  // ]

  // const row2 = [
  // './afcons.png',
  //   './iitb.svg',
  //   './iithyd.jpg',
  //   './iitkan.jpg',
  //   './iitkh.png',
  //   './iitmad.png',
  //   './mir.png',
  //   './nitdur.jpg',
  // ]

  return (
    <>
    
        <Wrapper>
          <Text>COLLABORATING WITH</Text>
          <Note>Teamwork begins by building trust....</Note>
          {/* <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee> */}
        </Wrapper>

    </>
  )
}

// export default App;

/* const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
` */

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Text = styled.div`
  font-size: 30px;
  font-weight: light;
  margin-bottom: 10px;
  color: #35374b;

  @media (max-width: 1270px) {
    font-size: 50px;
  }
  @media (max-width: 1060px) {
    font-size: 40px;
  }
  @media (max-width: 925px) {
    font-size: 40px;
  }
  @media (max-width: 835px) {
    font-size: 40px;
  }
  @media (max-width: 730px) {
    font-size: 40px;
  }
  @media (max-width: 620px) {
    font-size: 40px;
  }
  @media (max-width: 527px) {
    font-size: 35px;
  }
  @media (max-width: 415px) {
    font-size: 30px;
  }
`

const Note = styled.div`
  margin-bottom: 40px;
  color: #787a91;
  @media (max-width: 1270px) {
    font-size: 40px;
  }
  @media (max-width: 1060px) {
    font-size: 33px;
  }
  @media (max-width: 925px) {
    font-size: 30px;
  }
  @media (max-width: 835px) {
    font-size: 30px;
  }
  @media (max-width: 730px) {
    font-size: 30px;
  }
  @media (max-width: 620px) {
    font-size: 30px;
  }
  @media (max-width: 527px) {
    font-size: 25px;
  }
  @media (max-width: 415px) {
    font-size: 20px;
  }
`

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  height: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
  @media (max-width: 1270px) {
    width: 1000px;
  }
  @media (max-width: 1060px) {
    width: 900px;
  }
  @media (max-width: 925px) {
    width: 800px;
  }
  @media (max-width: 835px) {
    width: 700px;
  }
  @media (max-width: 730px) {
    width: 600px;
  }
  @media (max-width: 620px) {
    width: 500px;
  }
  @media (max-width: 527px) {
    width: 400px;
  }
  @media (max-width: 415px) {
    width: 350px;
  }
`

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`

const MarqueeGroup = styled.div`
  ${common}
`
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: 5px;
  height: 155px;
  @media (max-width: 1270px) {
    padding: 3px 10px;
  }
  @media (max-width: 1080px) {
    padding: 5px;
  }
  @media (max-width: 925px) {
    padding: 3px;
  }
  @media (max-width: 835px) {
    padding: 3px;
  }
  @media (max-width: 730px) {
    padding: 3px;
  }
  @media (max-width: 620px) {
    padding: 2px;
  }
  @media (max-width: 527px) {
    padding: 3px;
  }
  @media (max-width: 415px) {
    padding: 3px;
  }
`

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 1270px) {
    padding: 5px 20px;
  }
  @media (max-width: 1060px) {
    padding: 0px 0px;
  }
  @media (max-width: 925px) {
    padding: 0px 0px;
  }
  @media (max-width: 835px) {
    padding: 0px 0px;
  }
  @media (max-width: 730px) {
    padding: 0px 0px;
  }
  @media (max-width: 620px) {
    padding: 0px 0px;
  }
  @media (max-width: 527px) {
    padding: 0px 0px;
  }
  @media (max-width: 415px) {
    padding: 0px 0px;
  }
`

// class Logoslider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: 'linear',
//     }
//     return (

//       <div className="mainContainer">
//         <h2 className='heading'>In Collaboration With:</h2>
//         <Slider {...settings}>
//           <div className="container">
//             <img src={iitkh} />
//           </div>
//           <div className="container">
//             <img src={iitmad} />
//           </div>
//           <div className="container">
//             <img src={iitr} />
//           </div>
//           <div className="container">
//             <img src= {iitb}/>
//           </div>
//           <div className="container">
//             <img src={daiict} />
//           </div>
//           <div className="container">
//             <img src={hans} />
//           </div>
//           <div className="container">
//             <img src={hindu} />
//           </div>
//           <div className="container">
//             <img src={iimblr} />
//           </div>
//           <div className="container">
//             <img src={iimk} />
//           </div>
//           <div className="container">
//             <img src={iimluck} />
//           </div>
//           <div className="container">
//             <img src={iithyd} />
//           </div>
//           <div className="container">
//             <img src={iitkan} />
//           </div>
//           <div className="container">
//             <img src={isi} />
//           </div>
//         </Slider>
//       </div>
//     )
//   }
// }

export default Logoslider
