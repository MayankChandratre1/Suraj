import React, { useState } from 'react';
import { Link } from "react-scroll";
import './Header.css';
import bars from './images/bars.png';
import logo from './images/logo.png';
const Header = () => {
  const mobile= window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuopened]=useState(false);
  return (
    <div className="header">
      
        <img src={logo} className="logo" />
        {menuOpened===false && mobile===true ? (
          <div style={{backgroundColor:"var(--appcolor)",padding:"0.5rem",borderRadius:"5px",cursor:"pointer"}}
            onClick={()=> setMenuopened(true)}
          >
            <img src={bars} alt="" style={{width:"1.5rem",height:"1.5rem"}} />
          </div>
        ) : (
          <ul className="header-menu">
            <li >
            <Link 
            onClick={()=> setMenuopened(false)}
            to='hero' 
            spy={true}
            smooth={true}
            >Home</Link>
              </li>
            <li>
              <Link
              onClick={()=> setMenuopened(false)}
              to='programs' 
              spy={true}
              smooth={true}
              >Programs</Link>
            </li>
            <li >
              <Link
              onClick={()=> setMenuopened(false)}
              to='reasons' 
              spy={true}
              smooth={true}
              >Why us</Link>
            </li>
            <li>
              <Link
              onClick={()=> setMenuopened(false)}
              to='plans' 
              spy={true}
              smooth={true}
              >Plans</Link>
            </li>
            <li>
              <Link
              onClick={()=> setMenuopened(false)}
              to='testimonials' 
              spy={true}
              smooth={true}
              >Testimonials</Link>
              </li>
          </ul>
        ) }
        
    </div>
  )
}

export default Header
