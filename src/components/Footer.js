import React from 'react';
import '../styles/footerStyle.css';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';

function Footer() {
  return (
    <div className='footer'>
       <div className='social-links'>
            <img src={instagram} />
            <img src={twitter} />
            <img src={facebook} />
            <img src={linkedin} />
       </div>
       <p className='footer-text'>@2022 copyright React Foods</p>
    </div>
  )
}

export default Footer