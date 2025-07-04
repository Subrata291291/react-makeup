import React, { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import galleryImages from '../data/GalleryData';
import { useLocation } from 'react-router-dom';

const GallerySection = () => {
  const location = useLocation();

  useEffect(() => {
    Fancybox.bind("[data-fancybox='mygallery']", {});
  }, []);

  const isPortfolioPage = location.pathname === '/portfolio';

  // Conditionally show all or first 8 images
  const imagesToShow = isPortfolioPage ? galleryImages : galleryImages.slice(0, 8);

  return (
    <section className="gallery_area custom_gap" data-aos="fade-up">
      <div className="container">
        <div className="title_box">
          <h3 className="title">gallery</h3>
          <h4 className="description">Portfolio</h4>
          <hr className="line line-hr-secondary mb-5" />
        </div>
        <div className="gallery">
          <div className="row">
            {imagesToShow.map((image, index) => (
              <div className="col-md-3 col-4" key={index}>
                <div className="content">
                  <a
                    href={image.src}
                    data-fancybox="mygallery"
                    data-caption={image.caption}
                    title={image.alt}
                  >
                    <img src={image.src} alt={image.alt} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isPortfolioPage && (
          <div className="text-center">
            <button
              className="btn button view_more_btn position-relative"
              type="button"
              onClick={() => window.location.href = '/portfolio'}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
