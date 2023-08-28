import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.scss'
import Analyzer from '../../assets/img/Analyzer.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Hero() {
  return (
    <section className='hero'>
     <div className="container">
     <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='hero__info'>
            <h2>Анализатор <br />
            ABL800 FLEX</h2>
            <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
            <button>Подробнее</button>
          </div>
          <img src={Analyzer} className='hero__slide__img' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className='hero__info'>
            <h2>Анализатор <br />
            ABL800 FLEX</h2>
            <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
            <button>Подробнее</button>
          </div>
          <img src={Analyzer} className='hero__slide__img' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className='hero__info'>
            <h2>Анализатор <br />
            ABL800 FLEX</h2>
            <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
            <button>Подробнее</button>
          </div>
          <img src={Analyzer} className='hero__slide__img' alt="" />
        </SwiperSlide>
      </Swiper>
     </div>
    </section>
  )
}

export default Hero