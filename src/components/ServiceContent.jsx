import React from 'react';
import serviceData from '../data/ServiceData';

const ServiceContent = () => {
  return (
    <section className="service_area" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-5 col-md-12">
            <div className="service_left" data-aos="zoom-in">
              <div className="title_box">
                <h3 className="title">{serviceData.title}</h3>
                <h4 className="description">{serviceData.description}</h4>
                <hr className="line line-hr-secondary mb-5" />
              </div>
              {serviceData.paragraphs.map((text, index) => (
                <p key={index} className="mb-3">{text}</p>
              ))}
              <button
                className="btn button service-btn position-relative"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7 col-md-12">
            <div className="service_right offset-lg-1">
              <div className="row">
                {serviceData.services.map((service, index) => (
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6 service_box" key={index}>
                    <div className="service-pic">
                      <img src={service.img} alt={service.label} />
                      <h5>{service.label}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
