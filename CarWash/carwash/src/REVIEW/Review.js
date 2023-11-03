import React from 'react'
import './Review.css'
import Homemain from '../HOME_NAVBAR/Homemain'
import pauln from './Img/pauln.png'
import diesel from './Img/diesel.png'
import rock from './Img/rock.png'


export default function Review() {
  return (
    <div>
        <Homemain></Homemain>
        <div class="cont">
        <h2 className='bigc'> Our Happy <br></br> Clients. </h2>
        <p class="description">Quality Is Remembered Long After The Price Is Forgotton.</p>
    
      
        <div class="reviewSection">

       
            <div class="reviewItem">
                <div class="top">
                    <div class="clientImage">
                        <img src={pauln} alt=""></img>
                        <span>Paul Walker</span>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p class="review">"This car modification shop is top-notch! They transformed my vehicle beyond my wildest dreams. The craftsmanship and attention to detail are exceptional. Highly recommend this shop!"</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>

       
            <div class="reviewItem">
                <div class="top">
                    <div class="clientImage">
                        <img src={diesel} alt=""></img>
                        <span>Vin Diesel</span>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-regular fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p class="review">"This car modification shop is pure magic! The transformation they delivered is mind-blowing. Impeccable work, and they truly understand your vision. Outstanding experience!"</p>
                    <p>Jan 01, 2023</p>
                </article>
            </div>

       
            <div class="reviewItem">
                <div class="top">
                    <div class="clientImage">
                        <img src={rock} alt=""></img>
                        <span>Dwayne Johnson</span>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                    </ul>
                </div>
                <article>
                    <p class="review">"I can't express how thrilled I am with this car modification shop. They turned my dreams into reality. Attention to detail and passion shine through their work. Exceptional service!"</p>
                    <p>Jan 01, 2023</p>
                </article>
                
            </div>
        </div>
        
    </div>
     
    </div>
  )
}
