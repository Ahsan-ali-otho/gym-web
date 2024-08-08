import React, {useState} from 'react'
import logo from '../images/logo.png';
import {Link} from 'react-scroll';
const Navbar = () => {

    const [nav,setnav] = useState(false);
    const  changeBackground = ()=>{
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
  <nav className={nav ? "nav active" : 'nav'}>
    <Link to="main" className='logo'>
        <img src={logo} alt="" />
        </Link>
        <input className='manu-btn' type="checkbox" id='manu-btn' />
        <label className="manu-icon" for='manu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul>
            <li><Link to="main" smooth={true} duration={1000}>Header</Link></li>
            <li><Link to="features" smooth={true} duration={1000}>Features</Link></li>
            <li><Link to="presentaion" smooth={true} duration={900}>Offers</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>Contect</Link></li>
            
        </ul>

  </nav>
  )
}

export default Navbar
