import React, { useEffect } from 'react';
import './Home.css';
import Aos from 'aos';
import Button from '../BUTTON/Button';
import Homemain from '../HOME_NAVBAR/Homemain';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="main">
      <Homemain/>
      <div className="bg">
        
        <h1 className="hd">CarS.DoC</h1>
      </div>

      <div className="cardi">
        <h2 className="hname" data-aos="fade-right" data-aos-delay=".1s">
          FACILITIES
        </h2>
        <div className="contcard">
          <div className="column col-lg-3 col-md-6 col-sm-6">
            <div className="content">
              <h2>Car Wash</h2>
              <span>Premium Service</span>
            </div>
          </div>
          <div className="column col-lg-3 col-md-6 col-sm-6">
            <div className="content">
              <h2>Vinyl Works</h2>
              <span>Premium Scraps</span>
            </div>
          </div>
          <div className="column col-lg-3 col-md-6 col-sm-6">
            <div className="content">
              <h2>Lamp Works</h2>
              <span>Premium Lamps</span>
            </div>
          </div>
          <div className="column col-lg-3 col-md-6 col-sm-6">
            <div className="content">
              <h2>Painting Work</h2>
              <span>Premium Paints</span>
            </div>
          </div>
          <div className="column col-lg-3 col-md-6 col-sm-6">
            <div className="content">
              <h2>Spoiler Works</h2>
              <span>Premium Spoilers</span>
            </div>
          </div>
          <div className="column col-lg-3 col-md-6 col-sm-6">
            <div className="content">
              <h2>Alloy Works</h2>
              <span>Premium Alloys</span>
            </div>
          </div>
          <div className="column col-lg-3 col-md-6 col-sm-6">
            <div className="content">
              <h2>Exhaust Works</h2>
              <span>Premium Exhausts</span>
            </div>
          </div>
          <div className="column col-lg-3 col-md-6 col-sm-6">
            <div className="content">
              <h2>Engine Works</h2>
              <span>Premium Engines</span>
            </div>
          </div>
        </div>
      </div>

      <Button />
    </div>
  );
}
