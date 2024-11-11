import React from 'react'
import { plansData } from '../data/plansData'
import './Plans.css'
import whitetick from './images/whiteTick.png'
import Modal from './Modal'
const Plans = () => {
    const [shoeModal, setShoeModal] = React.useState(false);

  return (
    <div className="plans-container">
        <div className="blur plans-blur1"></div>
        <div className="blur plans-blur2"></div>
        <div className="programs-header">
            <span className="shape-text">READY TO START</span>
            <span>OUR JOURNEY</span>
            <span className="shape-text">NOW WITHUS</span>
        </div>
        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>Rs. {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whitetick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits - </span>
                    </div>
                    <button className="btn" onClick={()=>{
                        setShoeModal(true);
                    }}>Join Now</button>
                </div>
            ))}
        </div>
        {shoeModal && <Modal close={()=>{
            setShoeModal(false);
        }} />}
    </div>
  )
}

export default Plans
