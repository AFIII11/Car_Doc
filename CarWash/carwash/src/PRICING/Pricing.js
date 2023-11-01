import React from 'react'
import './Pricing.css'
import Homemain from '../HOME_NAVBAR/Homemain'
import mini from './Img/mini.jpg'

export default function Pricing() {
  return (
    <div className='main2'>
        <Homemain/>
    <div className='txt'>
    <h1 className='txth'>MAKE'EM GO</h1>
    </div>
    <div class="card2" style={{width: '18rem'}}>
  <img src={mini} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>





      
    </div>
  )
}
