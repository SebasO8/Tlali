import React from 'react'
import './Footer.css'
import { SiInstagram } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { useParams } from 'react-router-dom';

const Footer = () => {
  let params = useParams().id;
  console.log(params)
  return (
    <div className='footerContainer'>
      <div className='footer'>
        <div className='imageContainer'>
          <img src="https://i.ibb.co/1sKVCVX/Logo-75x75px.jpg" alt="Logo Tlali" className='LogoTlali'/>
        </div>
        <p className='text'>TLALI © 2021 All Rights Reserved.</p>
        <div className='iconsContainer'>
          <a href="https://www.instagram.com/tlali_co/?utm_medium=copy_link">
            <SiInstagram className='icons ins'/>
          </a>
          <a href="https://wa.link/zy4lx6">
            <SiWhatsapp className='icons'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
