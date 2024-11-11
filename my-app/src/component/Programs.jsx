import React from 'react'
import { programsData } from '../data/programsData'
import './Programs.css'
import rightarrow from './images/rightArrow.png'
const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className="shape-text">Explore our</span>
            <span>programs</span>
            <span>to shape you</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={rightarrow} alt="" />
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Programs
