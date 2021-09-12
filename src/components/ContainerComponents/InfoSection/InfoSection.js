import React, { useEffect } from 'react'
import Button from '../../Button/Button';
import { Link } from 'react-router-dom'
import './InfoSection.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const InfoSection = ({heading1, heading2, paragraphOne1, paragraphTwo1, buttonLabel1, reverse, image1, image2}) => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div data-aos={reverse ? 'fade-left': 'fade-right'} className='Section'>
      <div className='Container'>
        <div className={reverse ? 'ColumnLeft' : 'ColumnRigth2 '} >
          <h1>{reverse ? heading1 : heading2}</h1>
          <p>{paragraphOne1}</p>
          <p>{paragraphTwo1}</p>
          <a href="https://www.instagram.com/tlali_co/?utm_medium=copy_link" className='link'>
            <Button text={buttonLabel1}/>
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
