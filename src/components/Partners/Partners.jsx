import React, { useState } from 'react'
import './Partners.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules';
import { partnersData } from '../../lib/partnersData';

function Partners() {
  const [wWidth, setWwidth] = useState(window.innerWidth)
  window.addEventListener('resize', ()=>{
      setWwidth(window.innerWidth);
  })

  return (
    <section className='partners'>
        <div className="container">
            <h2>ПАРТНЕРЫ</h2>
            <div className="partners__list">
            <Swiper
                slidesPerView={wWidth> 1000 ? 4: wWidth<=1000 && wWidth > 800 ? 3 : wWidth<=800 && wWidth > 550 ?  2: 1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                grid={{
                rows: 2
                ,
                }}
                // grid={wWidth > 560 ? {rows:2,} : {rows:1,}}
                loop={true}
                navigation={true}
                spaceBetween={0}
                pagination={{
                  type: 'fraction',
                }}
                
                modules={wWidth > 720 ? [Grid ,Autoplay, Navigation] : [Grid ,Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
              {
                partnersData?.map((item,index)=>(
                  <SwiperSlide key={index}>
                    <div className="partners__item">
                      <img src={item.img} alt="" />
                    </div>
                    
                  </SwiperSlide>
                )) 
              }
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Partners