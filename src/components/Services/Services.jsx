import React, { useState } from 'react'
import './Services.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// import img
import services1 from '../../assets/img/services1.png'
import services2 from '../../assets/img/services2.png'
import services3 from '../../assets/img/services3.png'
function Services() {
    const [wwidth, setWwidth] = useState(window.innerWidth)
    window.addEventListener('resize', ()=>{
        setWwidth(window.innerWidth);
    })
  return (
    <section className='services'>
        <h2>УСЛУГИ</h2>
        <div className="services__slider">
            <div className="container">
            <Swiper
                slidesPerView={wwidth > 1200 ? 3 : wwidth <= 1200 && wwidth >= 700 ? 2 : 1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                   <div className="services__item" data-aos="zoom-in">
                   <img src={services1} alt="" />
                    <div className="item__info">
                        <h4>СЕРВИС ОБОРУДОВАНИЯ</h4>
                        <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......</p>
                        <button>Подробнее</button>
                    </div>
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="services__item" data-aos="zoom-in">
                    <img src={services2} alt="" />
                    <div className="item__info">
                        <h4>РЕГИСТРАЦИИ</h4>
                        <p>Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....</p>
                        <button>Подробнее</button>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="services__item" data-aos="zoom-in">
                    <img src={services3} alt="" />
                    <div className="item__info">
                        <h4>УСЛУГИ ЛОГИСТИКИ</h4>
                        <p>Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....</p>
                        <button>Подробнее</button>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Services