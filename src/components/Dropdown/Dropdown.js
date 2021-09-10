import React from 'react'
import './Dropdown.css'
import { menuData } from '../../data/MenuData'
import  Button  from '../Button/Button'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Dropdown = ({open , toggle}) => {
  return (
    <div className={open ? 'DropdownContainerOpen' : 'DropdownContainerClose'} open={open} onClick={toggle}>
      <div className='Icon' onClick={toggle}>
        <FaTimes className='CloseIcon'/>
      </div>
      <div>
        <div className='DropdownMenu'>
          {menuData.map((item, index) => (
            <Link to={item.link} key={index} className='DropdownLink'>
              {item.title}
            </Link>
          ))}
        </div>
        <div className='BtnWarp'>
          <Button text={'Contact Us'} big={true} to='/contact'/>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
