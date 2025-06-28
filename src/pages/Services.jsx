import React from 'react';
import serviceData from '../data/ServiceData';

const Services = () => {
  const { title, description, paragraphs, services } = serviceData;

  return (
    <div>
      <section className="service_area aos-init aos-animate" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="service_left aos-init aos-animate" data-aos="zoom-in">
                <div className="title_box">
                  <h3 className="title">{title}</h3>
                  <h4 className="description">{description}</h4>
                  <hr className="line line-hr-secondary mb-5" />
                </div>

                {/* Introductory Paragraphs */}
                {paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}

                <br />

                {/* Service Cards */}
                <div className="row">
                  {services.map((service, index) => (
                    <div className="col-lg-4 col-12 service-box" key={index}>
                      <div  className="text-center">
                        <img
                          src={service.img}
                          alt={service.label}
                          className="img-fluid mb-3"
                          style={{ maxHeight: '100px' }}
                        />
                        <h3 style={{ color: '#fff' }} className="mb-4 mt-2"><b>{service.label}</b></h3>
                      </div>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
