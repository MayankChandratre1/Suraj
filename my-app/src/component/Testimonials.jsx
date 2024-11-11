import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import './Testimonials.css';
import leftarrow from './images/leftArrow.png';
import rightarrow from './images/rightArrow.png';

const Testimonials = () => {

    const [selected,setSelected]=useState(0);
    const tlength=testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="shape-text">What they</span>
        <span>say about us</span>
        <span>
            {testimonialsData[selected].review}
        </span>
        <span>
            <span style={{color:'var(--orange)'}}>
                {testimonialsData[selected].name}
            </span>{" "}
             - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
            <img 
            onClick={()=>{
                selected===0?setSelected(tlength-1):setSelected((prev)=> prev-1)
            }}
            src={leftarrow} alt="" />
            <img 
            onClick={()=>{
                selected===tlength-1?setSelected(0):setSelected((prev)=> prev+1)
            }}
            src={rightarrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
