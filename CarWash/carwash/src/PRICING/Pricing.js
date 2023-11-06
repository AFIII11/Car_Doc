import React, { useEffect } from 'react'
import './Pricing.css'
import Homemain from '../HOME_NAVBAR/Homemain'
import enginenew from './Img/enginenew.jpg'
import wheelnew from './Img/wheelnew.jpg'
import washnew from './Img/washnew.jpg'
import exhaustnew from './Img/exhaustnew.jpg'
import spoilernew from './Img/spoilernew.jpg'
import paintingnew from './Img/paintingnew.jpg'
import headnew from './Img/headnew.jpg'
import interiornew from './Img/interiornew.jpg'
import turbonew from './Img/turbonew.jpg'
import brakenew from './Img/brakenew.jpg'
import tiren from './Img/tiren.png'
import Aos from 'aos'

export default function Pricing() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='main2'>
      <Homemain />
      <div className='txt'>
        <h1 className='txth' data-aos="zoom-in" data-aos-delay=".10s">MAKE'EM GO</h1>
      </div>
      <div>
        <img src={tiren} className='go mx-auto'  ></img>
      </div>
      <div className='cards d-flex flex-wrap' data-aos="fade-right" data-aos-delay=".6s">
        <div class="card2 line" style={{ width: '18rem' }}>
          <img src={enginenew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Engine</h5><br></br>
            <p class="card-text">
              Car Engines Price Range	No of Products(%)(INR). <br></br>
              Rs 22000 - 34000 -	41%<br></br>
              Rs 34000 - 52000 -	24%<br></br>
              Rs 52000 - 81000 -	18%<br></br>
              Rs 81000 - 125000 -	6%</p>
          </div>

        </div>
        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={wheelnew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Alloy</h5><br></br>
            <p class="card-text">Alloy Wheels Price Range	No of Products(%)(INR).<br></br>
              Rs 15000 - 20000	35%<br></br>
              Rs 20000 - 26000	17%<br></br>
              Rs 26000 - 34000	23%<br></br>
              Rs 34000 - 45000	5%</p>
          </div>
        </div>
        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={washnew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Car Wash</h5><br></br>
            <p class="card-text">Car Washing Price Range	No of Products(%)(INR).<br></br>
              Rs	300 - 800  37%<br></br>
              Rs	500 - 1000  17%<br></br>
              Rs	300 - 600  23%<br></br>
              Rs	1000 - 2000  5%
            </p>
          </div>
        </div>
        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={exhaustnew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Exhaust</h5><br></br>
            <p class="card-text">Exhaust Price Range	No of Products(%)(INR).<br></br>
              Rs 10000 - 15000  35%<br></br>
              Rs 20000 - 25000  17%<br></br>
              Rs 30000 - 35000  23%<br></br>
              Rs 35000 - 40000  5%</p>
          </div>
        </div>
        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={spoilernew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Spoiler</h5><br></br>
            <p class="card-text">Spoilers Price Range	No of Products(%)(INR).<br></br>
              Rs 1500 - 2000	35%<br></br>
              Rs 3000 - 5000	17%<br></br>
              Rs 10000 - 15000	23%<br></br>
              Rs 20000 - 25000	5% </p>
          </div>
        </div>
        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={paintingnew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Painting</h5><br></br>
            <p class="card-text">Paintings Price Range	No of Products(%)(INR).<br></br>
              Front Bumber - 2000 - 35%<br></br>
              Rear Bumber - 2000 - 17%<br></br>
              Single Door - 2000 - 17%<br></br>
              Full Body - 23000 - 31%</p>
          </div>
        </div>

        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={headnew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Head Lamp</h5><br></br>
            <p class="card-text">Lamps Price Range	No of Products(%)(INR).<br></br>
              Head Lamps - 12500 - 35%<br></br>
              Neon Lamps - 1000 - 17%<br></br>
              Fog Lamps - 1000 - 17%<br></br>
              Full Kit Lamp - 31%</p>
          </div>
        </div>
        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={interiornew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Interior</h5><br></br>
            <p class="card-text">Car Lights Price Range	No of Products(%)(INR).<br></br>
              Rs 230 - 380	19%<br></br>
              Rs 380 - 640	10%<br></br>
              Rs 640 - 1100	29%<br></br>
              Rs 1100 - 1800	33%.</p>
          </div>
        </div>
        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={turbonew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Turbo</h5><br></br>
            <p class="card-text">Turbo Charger Price Range	No of Products(%)(INR).<br></br>
              Rs 12500 - 15000	19%<br></br>
              Rs 20000 - 25000	10%<br></br>
              Rs 30000 - 35000	29%<br></br>
              Rs 40000 - 45000	33%.</p>
          </div>
        </div>
        <div class="card3 line" style={{ width: '18rem' }}>
          <img src={brakenew} class="card-img-top img-fluid" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Brake</h5><br></br>
            <p class="card-text">Brake Price Range	No of Products(%)(INR).<br>
            </br>
              Rs 800 - 1000	19%<br></br>
              Rs 2000 - 2500	10%<br></br>
              Rs 3000 - 3500	29%<br></br>
              Rs 4000 - 5000	33%.</p>
          </div>
        </div>



      </div>







    </div>
  )
}
