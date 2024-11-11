import React from 'react'
import Header from './Header'
import './Hero.css'
import calories from './images/calories.png'
import heart from './images/heart.png'
import hero_image from './images/hero_image.png'
import hero_image_back from './images/hero_image_back.png'
import { Link } from 'react-scroll'


const Hero = () => {
  return (
    <div className="hero">
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
            <div className="best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>
            <div className="hero-text">
                <div>
                    <span className="shape-text">Shape</span>
                    <span> Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we wii help you to shape and build your ideal body
                            and live up your body to fullest
                    </span>
                </div>
            </div>
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                <   span>+978</span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Fitness programs</span>
                </div>
            </div>
            <div className="hero-buttons">
                <button className="btn"><Link
              to='programs' 
              spy={true}
              smooth={true}
              >Get Started</Link></button>
                <button className="btn"><Link
              to='reasons' 
              spy={true}
              smooth={true}
              >Learn More</Link></button>
               
            </div>
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>

            <div className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>
            <img src={hero_image} className="hero_image" />
            <img src={hero_image_back} className="hero_image_back" />
            <div className="calories">
                <img src={calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
