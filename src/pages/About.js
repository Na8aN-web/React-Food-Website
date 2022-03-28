import React from 'react';
import '../styles/aboutStyle.css';
import banner from '../images/meal5.jpg'

function About() {
  return (
    <div className='about'>
     
    <h1 className='about-header'>About Us</h1>
     <p className='about-page'> Welcome to React foods, your number one source for all your delicious food. We're dedicated to providing you the very best, with an emphasis on quality dishes at the cheapest prices.


Founded in 2017 by Nathan Kaduru, React foods has come a long way from its beginnings. When we first started out, our passion for eco-friendly food drove us to start our own business.


We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.


Sincerely,

React Foods </p>
<img src={banner} className="banner-image"/>
    </div>
  )
}

export default About