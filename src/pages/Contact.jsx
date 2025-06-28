import React, { useState } from 'react';
import contactFormData from '../data/ContactFormData';
import checkmark from '../assets/images/checkmark.gif';

const defaultFormData = {
  name: '',
  phone: '',
  email: '',
  address: '',
  service: '',
  query: ''
};

const Contact = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    fetch('https://script.google.com/macros/s/AKfycbw3ZzaTjRgxx-x4_56Kdw1OO4zS86AkT7PVBf05PFwA-MXfanhDJA29RIm--qRZnAwB/exec', {
      method: 'POST',
      body: form
    })
      .then(res => res.text())
      .then(() => {
        setFormData(defaultFormData);
        setIsSubmitting(false);
        
        // Show thank you modal (requires Bootstrap JS)
        if (window.bootstrap && document.getElementById('thankYouModal')) {
          const thankYouModal = new window.bootstrap.Modal(document.getElementById('thankYouModal'));
          thankYouModal.show();
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        alert('There was an error submitting the form.');
        console.error(err);
      });
  };

  return (
    <>
      <section className="contact_area">
        <div className="container">
          <div className="row">

            {/* LEFT SIDE - MAP */}
            <div className="col-lg-6">
              <div className="contact-left">
                <iframe
                  src={contactFormData.mapEmbedUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="col-lg-6">
              <div className="contact_right">
                <div className="title_box">
                  <h4 className="title">Query Now</h4>
                  <hr className="line line-hr-secondary mb-5" />
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="container">
                    <div className="form-row row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-12 mb-3">
                        <input
                          type="text"
                          name="address"
                          placeholder="Your Address"
                          className="form-control"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <select
                          name="service"
                          className="form-select form-control"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a Service</option>
                          {contactFormData.services.map((s, idx) => (
                            <option key={idx} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <textarea
                          name="query"
                          placeholder="Leave a comment here"
                          className="form-control"
                          style={{ height: "100px" }}
                          value={formData.query}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="submit_btn button w-100" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Thank You Modal */}
      <div className="thank-you-modal modal fade" id="thankYouModal" tabIndex="-1" aria-labelledby="thankYouModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={checkmark} alt="Thank you" width="100" />
              <h4 className="mt-3">Thanks for contacting us. We will get back to you shortly.</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
