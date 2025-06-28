import React from 'react';
import blogData from '../data/BlogData';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const BlogContent = ( ) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="blog_area custom_gap aos-init aos-animate" data-aos="fade-up">
      <div className="container">
        <div className="title_box">
          <h3 className="title">Blogs</h3>
          <h4 className="description">Latest Works</h4>
          <hr className="line line-hr-secondary mb-5" />
        </div>
        <Slider {...settings} className="blog_slider">
          {blogData.map((item) => (
            <div className="blog-box" key={item.id}>
              <div className="blog-pic position-relative">
                <Link className="blogpgimg" to={`/blog/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
                <span className="blog-date position-absolute">{item.date}</span>
              </div>
              <div className="blog-content">
                <h4 className="blog-category">
                  {item.category}
                </h4>
                <h5 className="text-truncate">
                  {item.title}
                </h5>
                <p className='line-clamp-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogContent;
