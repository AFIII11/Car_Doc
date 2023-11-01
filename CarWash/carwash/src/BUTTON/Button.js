import React from 'react'
import { useNavigate } from 'react-router-dom'
import './butt.css'

export default function Button() {
    const Navigate =useNavigate()
    const Takeme =()=>{
        Navigate('/Takeme')
    }

  return (
<>
<button class="bookmarkBtn" onClick={Takeme}>
  <span class="IconContainer"> 
    <svg viewBox="0 0 384 512" height="0.9em" class="icon"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg>
  </span>
  <p class="text">DoC</p> 
</button>







</> 
  )
}

