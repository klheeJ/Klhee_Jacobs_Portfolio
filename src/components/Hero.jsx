import { Link } from 'react-scroll';

const Hero = () => {
  return (
  <div id='hero-main-head'>
    <div className='hero-image'>
      <img src="/public/Me-Mt2.jpeg" alt="pic of me on the mts" />
    </div>

    <div className='hero-main'>
      <div className='hero-heading'>
        Klhee Jacobs
      </div>
      <div className='hero-sub'>
          Passionate about design and creating empathetic and efficient code
      </div>
      <div className='hero-contact'>
        <Link to="connect" smooth={true} offset={-100} duration={500}><a><button className="connect-button">Let's Connect</button></a></Link>
      </div>
    </div>

  </div>
  );
};

export default Hero;
