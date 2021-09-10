import React from 'react'
import './Button.css'

export default function Button({text,big}) {
  return (
    <button className={big ? 'ButtonStyle Background1 Padding2 Color1 Font2' : 'ButtonStyle Background1 Padding1 Color1 Font1'}>{text}</button>
  )
}
