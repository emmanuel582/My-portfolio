import React, { useState } from 'react';
import avatarImage from '../assets/Avatar.jpg';

function About(){
    return( 
    <div className="About">
<h2>About</h2>
<div className="abouttext">
  <p className="abouttxtone">
    I’m a Full-stack Developer with a passion for building intuitive, high-impact solutions for fast-growing startups and financial institutions. My goal? Real products that work—clean, fast, and user-first.
  </p>
  <br />
  <p className="abouttxttwo">
    I'm Oyebimpe Emmanuel, a self-taught developer and medical student at the University of Ibadan. With 5+ years of experience, I specialize in web/app development, penetration testing, and cloud infrastructure.
  </p>
  <br />
  <p className="abouttxtthree">
    Started coding in 2019. Self-taught programmer with proven experience in building live projects. I'm passionate about solving Africa's real problems through tech. Also a partner at NeoLife, with a strong background in network marketing.
  </p>
</div>

<div className="aboutimgcon">
  <div className='activeimg'>
    <img src={avatarImage} alt="Oyebimpe Emmanuel" className="about-img" />
    <div className="img-caption">@wealth-consort</div>
  </div>
  <div className='activeimg'>
    <img src={avatarImage} alt="Oyebimpe Emmanuel" className="about-img" />
    <div className="img-caption">@phenominaltouch</div>
  </div>
</div>
    </div>)
}
export default About