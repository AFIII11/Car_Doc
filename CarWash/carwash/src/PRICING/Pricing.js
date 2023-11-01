import React, {useEffect} from 'react'
import './Pricing.css'
import Homemain from '../HOME_NAVBAR/Homemain'
import engines from './Img/engines.jpg'
import alloy from './Img/alloy.jpg'
import carwash from './Img/carwash.jpg'
import exhaust from './Img/exhaust.jpg'
import spoilernw from './Img/spoilernw.jpg'
import painting from './Img/painting.jpg'
import lamp from './Img/lamp.jpg'
import interior from './Img/interior.jpg'
import turbo from './Img/turbo.jpg'
import brake from './Img/brake.jpg'
import Aos from 'aos'

export default function Pricing() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='main2'>
        <Homemain/>
    <div className='txt'>
    <h1 className='txth'data-aos="zoom-in"  data-aos-delay=".6s">MAKE'EM GO</h1>
    </div>
    <div className='cards d-flex flex-wrap' data-aos="fade-right" data-aos-delay=".6s">
    <div class="card2 line" style={{width: '18rem'}}>
  <img src={engines} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Engine</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
</div>
<div class="card3 line" style={{width: '18rem'}}>
  <img src={alloy} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Alloy</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    <div class="card3 line" style={{width: '18rem'}}>
  <img src={carwash} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Car Wash</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    <div class="card3 line" style={{width: '18rem'}}>
  <img src={exhaust} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Exhaust</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    <div class="card3 line" style={{width: '18rem'}}>
  <img src={spoilernw} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Spoiler</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    <div class="card3 line" style={{width: '18rem'}}>
  <img src={painting} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Painting</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>

    <div class="card3 line" style={{width: '18rem'}}>
  <img src={lamp} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Head Lamp</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    <div class="card3 line" style={{width: '18rem'}}>
  <img src={interior} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Interior</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    <div class="card3 line" style={{width: '18rem'}}>
  <img src={turbo} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Turbo</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    <div class="card3 line" style={{width: '18rem'}}>
  <img src={brake} class="card-img-top img-fluid" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" data-aos="fade-right" data-aos-delay=".6s">Brake</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>



</div>






      
    </div>
  )
}
