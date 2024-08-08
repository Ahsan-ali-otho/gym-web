import React from 'react'
import aboutimage from '../images/about.png';

const About = () => {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt="" />

        </div>
        <div className="about-text">

            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut rem fugiat amet, numquam, reiciendis illum animi sit nisi modi, veritatis voluptate dolorum incidunt ea natus.</p>
            <button>READ MORE</button>
        </div>
      
    </div>
  )
}

export default About
