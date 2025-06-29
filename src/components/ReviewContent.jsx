import React, { useEffect } from 'react';
import reviewData from '../data/RevieData';
import Slider from 'react-slick';
import { useModal } from '../context/ModalContext';

const ReviewContent = () => {
  const { openModal } = useModal();
  useEffect(() => {
    // Optional: re-initialize AOS if needed
    if (window.AOS) window.AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
  };

  return (
    <div className="review_area position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="review_left position-relative" data-aos="fade-left">
              <div className="title_box">
                <h3 className="title">Need to Discuss?</h3>
                <h4 className="description">Do you need help with creative Makeup?</h4>
                <hr className="line line-hr-secondary mb-5" />
                <button
                  className="btn form-btn button"
                  onClick={openModal}
                >
                  Query Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="review_right position-relative" data-aos="flip-right">
              <h3>Reviews!</h3>
              <hr className="line line-hr-secondary mb-5" />
              <Slider {...settings} className="review_slider p-0">
                {reviewData.map((item, index) => (
                  <div className="slider position-relative slider-1" key={index}>
                    <div className="review_box">
                      <p>" {item.review} "</p>
                      <span>{item.name}</span>
                      <span className="quote-icon">
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
