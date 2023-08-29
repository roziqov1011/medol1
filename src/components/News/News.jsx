import React, { useState } from 'react'
import './News.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { newsData } from '../../lib/newsData';

function News() {
    const [wWidth, setWwidth] = useState(window.innerWidth)
  window.addEventListener('resize', ()=>{
      setWwidth(window.innerWidth);
  })
  return (
    <section className='news '>
        <div className="container">
            <h2>НОВОСТИ</h2>
            <div className="news__list">
            <Swiper navigation={true} 
            slidesPerView={wWidth > 1200 ? 3 : wWidth <=1200 && wWidth >700? 2 : 1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Navigation, Autoplay]} className="mySwiper">
                {
                    newsData?.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <div data-aos="flip-right" className="news__item">
                                <img src={item.img} alt="" />
                                <h3>{item.title}</h3>
                                <span>{item.data}</span>
                                <p>{item.dec}</p>
                                <button>{item.btn}</button>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
             <div className="news__links">
                <a href="#">Посмотреть все новости &nbsp; <ArrowCircleRightOutlinedIcon/></a>
                <a href="#">Подписаться на новости &nbsp; <ArrowCircleRightOutlinedIcon/></a>
             </div>
        </div>
    </section>
  )
}

export default News