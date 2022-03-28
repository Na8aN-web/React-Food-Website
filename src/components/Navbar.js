import React from 'react';
import '../styles/navbarStyle.css';
import menu from '../images/menu.png';
import close from '../images/close.png';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Navbar() {
  const [closeBar, setCloseBar] = React.useState(false);
  function changePanel(){
    setCloseBar(prevClose =>(!prevClose));
  }
  
  return (
      <div>
    <div className='navbar'>
        <img src={logo} alt="logo" className='navbar-image' />
        <ul className='navbar-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
    <div onClick={changePanel}><img src={closeBar ? close : menu} width="20px" className="panel"/></div>
 
  
    <ul className={closeBar === true ? "shown-links": "hidden-links"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>

  )
}

export default Navbar