import React from 'react';
import './Hero.css';
import Testimonial from './Testimonials';
import Features from './Features';
import { Link } from 'react-router-dom';
import video from '../images/f.mp4';
//import AdSense from 'react-adsense';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      <section className="hero">
        <div className="hero__video-wrapper">
          <video className="hero__background" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="hero__content">
          <Link to="/Courses" className="btn btn-primary btn-responsive">
            Explore Our Programs
          </Link>
        </div>
      </section>


      <Testimonial />
      <Features />
    </div>
  );
};

export default Hero;



/*

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isMobile ? (
          <AdSense.Google
            client='ca-pub-3266046398928633'
            slot='2316472618'
            style={{ display: 'block' }}
            layout='in-article'
            format='auto'
          />
        ) : (
          <AdSense.Google
            client='ca-pub-3266046398928633'
            slot='2316472618'
            style={{ display: 'block', maxWidth: '100%', width: '100%', height: 'auto' }}
            layout='in-article'
            format='auto'
          />
        )}
      </div>


*/






/*import React from 'react';
import './Hero.css';
import Testimonial from './Testimonials';
import Features from './Features';
import { Link } from 'react-router-dom';
import video from '../images/f.mp4';
import AdSense from 'react-adsense';

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__video-wrapper">
          <video className="hero__background" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="hero__content">
          <Link to="/Courses" className="btn btn-primary btn-responsive">
            Explore Our Programs
          </Link>
        </div>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AdSense.Google
          client='ca-pub-3266046398928633'
          slot='2316472618'
          style={{ display: 'block', maxWidth: '100%', width: '100%', height: 'auto' }}
          layout='in-article'
          format='auto'
          responsive='true'
        />
      </div>

      <Testimonial />
      <Features />
    </div>
  );
};

export default Hero;






/*import React from 'react';
import './Hero.css';
import Testimonial from './Testimonials';
import Features from './Features';
import { Link } from 'react-router-dom';
import video from '../images/f.mp4';
import AdSense from 'react-adsense';

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__video-wrapper">
          <video className="hero__background" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="hero__content">
         
         
         
          <Link to="/Courses" className="btn btn-primary btn-responsive">
            Explore Our Programs
          </Link>
        </div>
      </section>


      <AdSense.Google
  client='ca-pub-3266046398928633'
  slot='2316472618'
  style={{ display: 'block' }}
  layout='in-article'
  format='auto'
  responsive='true'

/>




      <Testimonial />
      <Features />
     
    </div>
  );
};

export default Hero;


*/