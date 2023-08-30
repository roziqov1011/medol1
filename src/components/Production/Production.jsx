import React, { useEffect, useState } from 'react'
import './Production.scss'
import { ProductionData } from '../../lib/data'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// Modal import 
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';
const style = {
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
function Production() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    document.querySelector('.header').style.right = '11px'
    return setOpen(true)
  };
  const handleClose = () => {
    document.querySelector('.header').style.right = '0px'
    return setOpen(false)
  };
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
                  <div className='production__item' data-aos="flip-right" key={index}>
                      <img src={item.img} alt="" />
                      <p>{item.info}</p>
                      <button onClick={handleOpen}>{item.btn}</button>
                  </div>
                </SwiperSlide>
                  
              ))
            }
            </Swiper>

            ):
            
              ProductionData.map((item,index)=>(
                <li className='production__item' data-aos="flip-right" key={index}>
                  <img src={item.img} alt="" />
                  <p>{item.info}</p>
                  <button onClick={handleOpen}>{item.btn}</button>
                </li>
              ))
            
          }
          
            
        </ul>
        <a className='production__redirect' href="#">Перейти в каталог нашей продукции &nbsp; <ArrowCircleRightOutlinedIcon/></a>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box className="my__modal" sx={style}>
          <Typography className='modal__top' id="modal-modal-title" variant="h6" component="h2">
            <button onClick={handleClose}><i className="bi bi-x-lg"></i></button>
            <h3>Запросить цену</h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form action="#">
              <input required type="text" placeholder='ФИО'/>
              <input required type="text" placeholder='Номер телефона*'/>
              <input required type="text" placeholder='Тема обращения*'/>
              <textarea name="" id="" cols="30" rows="5" placeholder='Сообщение*'></textarea>
              <span>
                <input required id='dos' type="checkbox" />
                <label htmlFor="dos">Отправляя заявку Вы соглашаетесь с политикой <br />конфиденциальности</label>
              </span>
              <button className='modal__btn' type='submit'>Запросить цену</button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </section>
  )
}

export default Production