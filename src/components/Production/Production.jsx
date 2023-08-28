import React from 'react'
import './Production.scss'
import { ProductionData } from '../../lib/data'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
function Production() {
  return (
    <section className='production'>
        <div className="container">
        <h2>ПРОДУКЦИЯ</h2>
        <ul className='production__list'>
        {
            ProductionData?.map((item, index)=>(
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