import React from 'react'
// slider section component
import SliderSection from './SliderSection'
// slider section component information
import {SliderData} from '../../data/SliderData'
// section component with information
import InfoSection from './InfoSection/InfoSection';
// data used in the information section
import { InfoData } from '../../data/InfoData';

const ContainerComponents = () => {
  return (
    <>
      <SliderSection slides ={SliderData}/>
      <InfoSection {...InfoData} reverse={true}/>
      <InfoSection {...InfoData} reverse={false}/>
    </>
  )
}

export default ContainerComponents
