import React, { useState } from 'react';
import avatarImage from '../assets/Avatar.jpg';

function About(){
    return( 
    <div className="About">
<h2>About</h2>
<div className="abouttext">
  <p className="abouttxtone">
    I love building solid, scalable products with sleek user experiences—fusing innovation and precision to solve real-world problems across multiple fields.
  </p>
  <br />
  <p className="abouttxttwo">
    I'm Oyebimpe Emmanuel, an 18-year-old medical student at the University of Ibadan and one of the top-ranked programmers in the school. With 5+ years of hands-on experience in web and app development, penetration testing, networking, and cloud computing, I build secure, intelligent solutions that stand out.
  </p>
  <br />
  <p className="abouttxtthree">
    A self-taught developer based in Ibadan, I combine my passion for tech and medicine with a strong background in network marketing as a partner at NeoLife. I'm driven by purpose, growth, and helping others elevate through technology and opportunity.
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