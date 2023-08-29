import React, { useState } from 'react'
import './SiteBar.scss'
import logo from '../../assets/img/logo.svg'

function SiteBar() {
  const [active , setActive] = useState(1)
  const [open , setOpen] = useState(false)
  console.log(open);
  document.querySelector('body').style.overflowY = open?'hidden': 'auto'
  document.querySelector('body').style.paddingRight = open ?'22px': '0px'
  return (
    <div>
      <button className='side__bar-btn' onClick={()=> setOpen(true)}><i className="bi bi-list"></i></button>
        <div className={open? 'nav__sidebar sidebar__open': 'nav__sidebar'}>
          <div className="sidebar__top">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <button onClick={()=> setOpen(false)} ><i className='bi bi-x-lg'></i></button>
          </div>
          <ul className={open ? 'sidebar__list sidebar__list__open': 'sidebar__list'}>
          <li className='sidebar__item'>
            <a onClick={()=> setActive(1)} className={active === 1 ? 'active': null} href="#">МАГАЗИН</a>
          </li>
          <li className='sidebar__item'>
            <a onClick={()=> setActive(2)} className={active === 2 ? 'active': null} href="#" >О КОМПАНИИ  </a>
          </li>
          <li className='sidebar__item'>
            <a onClick={()=> setActive(3)} className={active === 3 ? 'active': null} href="#">ПРОДУКЦИЯ  </a>
          </li>
          <li className='sidebar__item'>
            <a onClick={()=> setActive(4)} className={active === 4 ? 'active': null} href="#">УСЛУГИ  </a>
          </li>
          <li className='sidebar__item'>
            <a onClick={()=> setActive(5)} className={active === 5 ? 'active': null} href="#">АКЦИИ И НОВОСТИ  </a>
          </li>
          <li className='sidebar__item'>
            <a onClick={()=> setActive(6)} className={active === 6 ? 'active': null} href="#"> ОБРАТНАЯ СВЯЗЬ</a>
          </li>
         </ul>
        </div>
       
        <div onClick={()=> setOpen(false)} className={open? 'sidebar__bg sidebar__bg__open': "sidebar__bg"}>

        </div>
    </div>
  )
}

export default SiteBar;