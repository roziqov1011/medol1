import React from 'react'
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
  return (
    <section className='partners'>
        <div className="container">
            <h2>ПАРТНЕРЫ</h2>
            <div className="partners__list">
            <Swiper
                slidesPerView={4}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                grid={{
                rows: 2
                ,
                }}
                loop={true}
                navigation={true}
                spaceBetween={30}
                // pagination={{
                // clickable: true,
                // }}
                modules={[Grid ,Navigation,Autoplay]}
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