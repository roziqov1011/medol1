import React, { useState } from 'react'
import './Header.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/img/logo.svg'
import SiteBar from '../SiteBar/SiteBar';

function Header() {

  const [wWidth, setwWidth] = useState(window.innerWidth)
  const [active, setActive] = useState(1)
  const  [bg, setBg] = useState(false)
  console.log( wWidth);
  document.addEventListener("scroll", (event) => {
    if(window.scrollY >= 146){
     
      setBg(true)
    }else{
      setBg(false)
    }
    }
  );
  return (
    <>
    <h1 className="site__name">
    medol
    </h1>
    <header className={bg ? 'header header__bg': 'header'}>
      <div className="header__top container">
        <ul className='header__logo_list'>
          <li className='header__logo__item'>
                <a  href="https://www.google.com/maps/place/%D0%B4%D0%BE%D0%BC+%E2%84%963,+Tashkent,+Uzbekistan/@41.2933452,69.218819,15z/data=!4m10!1m2!2m1!1z0LMu0KLQsNGI0LrQtdC90YIsINCn0LjQu9Cw0L3Qt9Cw0YAgMTAg0LrQstCw0YDRgtCw0LssINC00L7QvCAzLzE!3m6!1s0x38ae8a4d16e5f5b5:0xb1daefdd2346ec86!8m2!3d41.2954881!4d69.2261509!15sCkHQsy7QotCw0YjQutC10L3Rgiwg0KfQuNC70LDQvdC30LDRgCAxMCDQutCy0LDRgNGC0LDQuywg0LTQvtC8IDMvMZIBH211bHRpX3VuaXRfcmVzaWRlbnRpYWxfYnVpbGRpbmfgAQA!16s%2Fg%2F11b6b54jkl?entry=ttu" target='_blank'>
                <LocationOnIcon className='header__icon'/>
                </a>
              <span>
                <a href="https://www.google.com/maps/place/%D0%B4%D0%BE%D0%BC+%E2%84%963,+Tashkent,+Uzbekistan/@41.2933452,69.218819,15z/data=!4m10!1m2!2m1!1z0LMu0KLQsNGI0LrQtdC90YIsINCn0LjQu9Cw0L3Qt9Cw0YAgMTAg0LrQstCw0YDRgtCw0LssINC00L7QvCAzLzE!3m6!1s0x38ae8a4d16e5f5b5:0xb1daefdd2346ec86!8m2!3d41.2954881!4d69.2261509!15sCkHQsy7QotCw0YjQutC10L3Rgiwg0KfQuNC70LDQvdC30LDRgCAxMCDQutCy0LDRgNGC0LDQuywg0LTQvtC8IDMvMZIBH211bHRpX3VuaXRfcmVzaWRlbnRpYWxfYnVpbGRpbmfgAQA!16s%2Fg%2F11b6b54jkl?entry=ttu" target='_blank'>г.Ташкент, Чиланзар
                10 квартал, дом 3/1</a>
              </span>
          </li>
          <li className='header__logo__item'>
            <a href="tel:+998712766253">
            <PhoneIcon className='header__icon'/>
            </a>
            <span>
              <a href="tel:+998712766253">+998 71 276-62-53</a> 
              <br />
              <a href="tel:+998712766254">+998 71 276-62-54</a>
            </span>
          </li>
          <li className='header__logo__item'>
            <a href="/">
              <img src={logo} alt="" />
            </a> 
          </li>
        </ul>
        <ul className='header__long__list'>
          <li className='header__long__item'>
            <SearchIcon className='header__icon header__icon__search'/>
          </li>
          <li className='header__long__item'>
            <a href="#" className='header__facebook'>
            <FacebookIcon />
            <p>Мы на Facebook</p>
            </a>
            
          </li>
          <li className='header__long__item'>
            <select className='item__long ' name="" id="">
              <option value="ru">{wWidth >= 600 ?  'Русский': 'Руc'}</option>
              <option value="uz">{wWidth >= 600 ? 'Uzbek': 'Uz'}</option>
            </select>
          </li>
         <li className="header__long__item">
          <SiteBar/>
         </li>
        </ul>
      </div>
      <nav className={bg? 'nav container nav__m': 'nav container'}>
         <ul className='nav__list'>
          <li className='nav__item'>
            <a onClick={()=> setActive(1)} className={active === 1 ? 'active': null} href="#">МАГАЗИН</a>
          </li>
          <li className='nav__item'>
            <a onClick={()=> setActive(2)} className={active === 2 ? 'active': null} href="#" >О КОМПАНИИ  </a>
          </li>
          <li className='nav__item'>
            <a onClick={()=> setActive(3)} className={active === 3 ? 'active': null} href="#">ПРОДУКЦИЯ  </a>
          </li>
          <li className='nav__item'>
            <a onClick={()=> setActive(4)} className={active === 4 ? 'active': null} href="#">УСЛУГИ  </a>
          </li>
          <li className='nav__item'>
            <a onClick={()=> setActive(5)} className={active === 5 ? 'active': null} href="#">АКЦИИ И НОВОСТИ  </a>
          </li>
          <li className='nav__item'>
            <a onClick={()=> setActive(6)} className={active === 6 ? 'active': null} href="#"> ОБРАТНАЯ СВЯЗЬ</a>
          </li>
          
         </ul>
      </nav>
    </header>
    </>
  )
}

export default Header