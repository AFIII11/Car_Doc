import React, { useEffect } from 'react';
import './Takeme.css';
import gtrn from './Img/gtrn.jpg';
import wagon from './Img/wagon.jpg';
import bently1 from './Img/bently1.jpg';
import blueferrari from './Img/blueferrari.jpg';
import lambo from './Img/lambo.jpg';
import supra from './Img/supra.jpg';
import Homemain from '../HOME_NAVBAR/Homemain';
import Aos from 'aos';

export default function Takeme() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <Homemain/>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>


  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={gtrn} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='doc' data-aos="zoom-in"  data-aos-delay=".10s">TaKe A LooK</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={bently1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={blueferrari} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={wagon} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={lambo} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={supra} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}
