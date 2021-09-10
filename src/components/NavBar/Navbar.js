import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css'
import {Link, useLocation} from 'react-router-dom'
import {menuData} from '../../data/MenuData'
import Button from '../Button/Button'
import { IoMdCart } from 'react-icons/io';
import {DataContext} from '../Context'

const Navbar = ({toggle}) => {
    
  const [showColor, setShowColor] = useState(false)

  useEffect(
    function(){
      const onScroll =  e =>{
        const newShowColor = window.scrollY > 60;
        showColor !== newShowColor && setShowColor(newShowColor)
      }
      document.addEventListener('scroll', onScroll)
  })
  let route = useLocation().pathname;
  function verify(){
    if(route !== '/'){
      return true
    }else{
      return false
    }
  }
  const { cart } = useContext(DataContext);
  
  const renderNav = (colors) => (
    <nav className={colors ? 'Nav2' : 'Nav'}>
      <Link to='/'className='link'>
        <div className='Logo' >Tlali</div>
      </Link>
      <i onClick={toggle} className='MenuBars'/>
      <div className='sectionShoppingCartRes'>
        <Link to='/cart' className='link'><IoMdCart className='shoppingCart'/></Link>
        <span className='productCart'>{cart.length}</span>
      </div>
      <div className='NavMenu'>
      {menuData.map((item, index) => (
          <Link to={item.link} key={index} className='NavMenuLinks'>
            {item.title}
          </Link>
        ))}
      </div>
      <div className='NavBtn'>
        <div className='sectionShoppingCart'>
          <Link to='/cart' className='link'><IoMdCart className='shoppingCart'/></Link>
          <span className='productCart'>{cart.length}</span>
        </div>
        <Link to='/contact' className='link'>
          <Button text={'Contact Us'}/>
        </Link>
      </div>
    </nav>
  ) 


  return (
    <>
    {renderNav()}
    {showColor && renderNav(true)}
    {verify() ? renderNav(true) : renderNav()}
    </>
  )
}



export default Navbar
