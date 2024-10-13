import React from 'react'
import hero_img from '../assets/hero_img.png'

const Home = () => {
  return (
    <>
    <section className='hero-container'>
        <div className="hero-text">
            <div className="inner-row">
                <img src="" alt="" />
                <h1>iPhone 14 Series</h1>
            </div>
            <div className="inner-text">
              <h1>Up to 10% off voucher</h1>
            </div>
            <u><a href="#">Shop Now</a></u>
        </div>
        <div className='hero-img'>
            <img src={hero_img} alt="" />
        </div>
    </section>
    {/* <section className="products">
      <h1>Today's</h1>
      <div className="div1">
        <div className="heading1">
          <h1>Flash Sale</h1>
        </div>
        <div className="counter">
          
        </div>
        <div className="arrow-btn"></div>
      </div>

      <div className="div2">
        div.pro
      </div>
    </section> */}
    </>
  )
}

export default Home
