import React from 'react'
import './Company.scss';
import logo from '../../assets/img/logo.svg'

function Company() {
  return (
    <section className='company'>
      <h2>О КОМПАНИИ</h2>
      <div className="container company__inner">
        <span  className='circle1' data-aos="zoom-in">
          <span className='circle2'>
            <span className='circle3'>
              <img src={logo} alt="" />
            </span>
          </span>
        </span>
        <div className="company__info">
          <p>
          Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. 
          </p>
          <button>Узнать больше</button>
        </div>
      </div>
    </section>
  )
}

export default Company