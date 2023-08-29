import React, { useEffect, useState } from 'react'
import './Production.scss'
import { ProductionData } from '../../lib/data'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';

function Production() {
  const [wWidth, setWwidth] = useState(window.innerWidth)
  window.addEventListener('resize', ()=>{
      setWwidth(window.innerWidth);
  })
  
  return (
    <section className='production'>
        <div className="container">
        <h2>ПРОДУКЦИЯ</h2>
        <ul className='production__list'>
          {
            wWidth < 1320 ? (

          <Swiper
          slidesPerView={wWidth > 1300? 3 : wWidth <=1300 && wWidth >710 ? 2 : 1}
          
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[ Pagination ,Autoplay]}
          className="mySwiper"
        >
          {
              ProductionData?.map((item, index)=>(
                <SwiperSlide key={index}>
                  <div className='production__item' key={index}>
                      <img src={item.img} alt="" />
                      <p>{item.info}</p>
                      <button>{item.btn}</button>
                  </div>
                </SwiperSlide>
                  
              ))
            }
            </Swiper>

            ):
            
              ProductionData.map((item,index)=>(
                <li className='production__item' key={index}>
                  <img src={item.img} alt="" />
                  <p>{item.info}</p>
                  <button>{item.btn}</button>
                </li>
              ))
            
          }
          
            
        </ul>
        <a className='production__redirect' href="#">Перейти в каталог нашей продукции &nbsp; <ArrowCircleRightOutlinedIcon/></a>
        </div>
    </section>
  )
}

export default Production