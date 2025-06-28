import React from 'react';
import video from '../assets/images/makeup.webm';

const Banner = ({
  title = 'Makeup Artist',
  subtitle = 'Nandita Halder',
  videoMp4 = video,
  videoWebm = video,
  buttonText = 'About Me',
  buttonLink = '#about-us',
}) => {
  const handleButtonClick = () => {
    window.location.href = buttonLink;
  };

  return (
    <section className="banner_area position-relative">
      <div className="banner_video">
        <video playsInline autoPlay loop muted className="w-100">
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
        </video>
      </div>
      <div className="container">
        <div className="banner_box">
          <h3 className="title">{title}</h3>
          <h4>{subtitle}</h4>
          <button
            className="btn button about_me_btn position-relative"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
