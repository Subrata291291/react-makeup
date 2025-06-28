import React, { useEffect } from 'react';
import AboutData from '../data/AboutData';
import Slider from 'react-slick';

const AboutContent = () => {
  useEffect(() => {

  }, []);

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <section className="about_area custom_gap" id="about-us" data-aos="fade-up">
      <div className="container">
        <div className="row gx-lg-5 gx-md-0 gx-0">
          <div className="col-lg-5">
            <div className="about_left position-relative" data-aos="flip-left">
              <img src={AboutData.aboutImage} alt="about" className="img-fluid w-100" />
              <img src={AboutData.signatureImage} alt="signature" className="signature-pic position-absolute" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about_right" data-aos="zoom-in">
              <div className="title_box">
                <h3 className="title">{AboutData.title}</h3>
                <h4 className="description">{AboutData.name}</h4>
                <hr className="line line-hr-secondary mb-5" />
              </div>
              {AboutData.description.map((text, index) =>
                text.trim() === "" ? <br key={index} /> : <p key={index}>{text}</p>
              )}
              <div className="award_area mt-5">
                <div className="title_box">
                  <h3 className="title">Award</h3>
                  <hr className="line line-hr-secondary mb-5" />
                </div>
                <Slider {...sliderSettings}>
                  {AboutData.awards.map((img, idx) => (
                    <div className="slider position-relative slider-1" key={idx}>
                      <div className="award_box">
                        <img src={img} alt={`award-${idx}`} className="img-fluid" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
