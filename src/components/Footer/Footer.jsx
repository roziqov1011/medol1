import React from 'react'
import './Footer.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import logo from '../../assets/img/logo.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container footer__inner">
          <div className="footer__left">
              <div className="footer__left__top">
              <img src={logo} alt="" />
                <h3>Контакты</h3>
                <div>
                  <a href="https://www.google.com/maps/place/%D0%B4%D0%BE%D0%BC+%E2%84%963,+Tashkent,+Uzbekistan/@41.2945406,69.2199819,15z/data=!4m10!1m2!2m1!1z0LMu0KLQsNGI0LrQtdC90YIsINCn0LjQu9Cw0L3Qt9Cw0YAgICAgICAgICAgICAgICAgICAgICAgIDEwINC60LLQsNGA0YLQsNC7LCDQtNC-0LwgMy8x!3m6!1s0x38ae8a4d16e5f5b5:0xb1daefdd2346ec86!8m2!3d41.2954881!4d69.2261509!15sClfQsy7QotCw0YjQutC10L3Rgiwg0KfQuNC70LDQvdC30LDRgCAgICAgICAgICAgICAgICAgICAgICAgMTAg0LrQstCw0YDRgtCw0LssINC00L7QvCAzLzGSAR9tdWx0aV91bml0X3Jlc2lkZW50aWFsX2J1aWxkaW5n4AEA!16s%2Fg%2F11b6b54jkl?entry=ttu" target='_blank'>
                    <LocationOnIcon/>
                    г.Ташкент, Чиланзар
                      10 <br /> квартал, дом 3/1
                  </a>
                  <a style={{marginTop:'20px'}} href="mailto:info@medol.uz">
                    <LocalPostOfficeIcon/>
                    info@medol.uz  
                  </a>
                </div>
                <span>
                <span className='footer__top_tel'>
                <PhoneIcon/>
                  <span>
                  <a href="tel:+998712766253">+998 71 276-62-53 </a>
                  <a href="tel:+998712766254">+998 71 276-62-54</a>
                  </span>
                </span>
                <button className='footer__top_btn'>Оставить заявку</button>
                </span>
              </div>
              <div className="footer__left__bottom">
                <img src={logo} alt="" />
                <p>Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.</p>
              </div>
              <span className='footer__series'>© 2021 ООО «Medical Online Services»</span>
          </div>
          <div className="footer__right">
           <div className='footer__right_inner'>
           <ul className='footer__list'>
              <li>
                <h3>О компании</h3>
              </li>
              <li>
                <a href="#">История</a>
              </li>
              <li>
                <a href="#">Партнеры</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
            </ul>
            <ul className='footer__list'>
              <li>
                <h3>Продукция</h3>
              </li>
              <li>
                <a href="#">Эндоваскулярная хирургия</a>
              </li>
              <li>
                <a href="#">Аритмология</a>
              </li>
              <li>
                <a href="#">Кардиохирургия</a>
              </li>
              <li>
                <a href="#">Лабораторная диагностика</a>
              </li>
              <li>
                <a href="#">Хирургия</a>
              </li>
              <li>
                <a href="#">Эндоурология</a>
              </li>
              <li>
                <a href="#">Нейрохирургия</a>
              </li>
              <li>
                <a href="#">Анестезиология и реанимация</a>
              </li>
              <li>
                <a href="#">Диабет</a>
              </li>
            </ul>
            <ul className='footer__list'>
              <li>
                <h3>Услуги</h3>
              </li>
              <li>
                <a href="#">Сервис</a>
              </li>
              <li>
                <a href="#">Регистрации</a>
              </li>
              <li>
                <a href="#">Услуги логистики</a>
              </li>
            </ul>
           </div>
           <p className='site__author'>Сайт разработан компанией &nbsp; <a href="www.uz">www.rrt.uz</a></p>
          </div>
      </div>
    </footer>
  )
}

export default Footer