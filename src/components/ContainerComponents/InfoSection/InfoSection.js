import React, { useEffect } from 'react'
import Button from '../../Button/Button';
import './InfoSection.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const InfoSection = ({heading1, heading2, paragraphOne1, paragraphTwo1, paragraphOne2, paragraphTwo2, buttonLabel1, buttonLabel2, reverse, image1, image2}) => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div data-aos={reverse ? 'fade-left': 'fade-right'} className='Section'>
      <div className='Container'>
        <div className={reverse ? 'ColumnLeft' : 'ColumnRigth2 '} >
          <h1>{reverse ? heading1 : heading2}</h1>
          <p>{reverse ? paragraphOne1 : paragraphOne2}</p>
          <p>{reverse ? paragraphTwo1 : paragraphTwo2}</p>
          <a href={reverse ? "https://www.instagram.com/tlali_co/?utm_medium=copy_link" : 'https://wa.link/833ncd'} className='link'>
            <Button text={reverse ? buttonLabel1 : buttonLabel2}/>
          </a>
        </div>
        <div className={reverse ? 'ColumnRigth ' : 'ColumnLeft2'} >
          <img src={reverse ? image1 : image2} alt='home'/>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
