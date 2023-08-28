import React from 'react'
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
  return (
    <section className='news '>
        <div className="container">
            <h2>НОВОСТИ</h2>
            <div className="news__list">
            <Swiper navigation={true} 
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Navigation, Autoplay]} className="mySwiper">
                {
                    newsData?.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <div className="news__item">
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