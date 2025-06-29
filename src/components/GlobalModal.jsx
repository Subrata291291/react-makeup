import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';
import checkmark from '../assets/images/checkmark.gif'

const GlobalModal = () => {
  const { isModalOpen, closeModal } = useModal();

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    phone: '',
    email: '',
    address: '',
    query: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw3ZzaTjRgxx-x4_56Kdw1OO4zS86AkT7PVBf05PFwA-MXfanhDJA29RIm--qRZnAwB/exec';
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: form
      });

      setFormData({ name: '', date: '', phone: '', email: '', address: '', query: '' });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Error!', error.message);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <>
      {/* Main Form Modal */}
      <div className="modal fade show d-block" id='appointment-modal' tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn-close" onClick={closeModal}></button>
              <h5 className="modal-title text-center pt-4 pb-4">Book Appointment</h5>
              <form onSubmit={handleSubmit} className="class-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-12">
                    <label>Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Email ID</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
                  </div>
                  <div className="col-md-12">
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
                  <div className="col-12 text-center">
                    <button className="btn submit-btn" type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : 'Book Appointment'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Thank You Modal */}
      {submitted && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center">
              <div className="modal-header border-0">
                <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
              </div>
              <div className="modal-body pb-4">
                <img src={checkmark} alt="Thank you" width="100" />
                <h4 className="mt-3">Thanks for contacting us. We’ll get back to you shortly.</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalModal;
