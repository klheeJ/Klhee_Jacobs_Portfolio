const Hero = () => {
  return (
  <div className='hero-main-head'>

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
      <a className="hero-connect" href="/contact"><button className="connect-button">Let's Connect</button></a>
    </div>

  </div>
  );
};

export default Hero;
