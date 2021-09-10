import React, { useEffect } from 'react'
import Button from '../../Button/Button';
import { Link } from 'react-router-dom'
import './InfoSection.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const InfoSection = ({heading, paragraphOne, buttonLabel, reverse, image1, image2}) => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div data-aos={reverse ? 'fade-left': 'fade-right'} className='Section'>
      <div className='Container'>
        <div className={reverse ? 'ColumnLeft' : 'ColumnRigth2 '} >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphOne}</p>
          <Link className='link' to='/homes'>
            <Button text={buttonLabel}/>
          </Link>
        </div>
        <div className={reverse ? 'ColumnRigth ' : 'ColumnLeft2'} >
          <img src={reverse ? image1 : image2} alt='home'/>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
