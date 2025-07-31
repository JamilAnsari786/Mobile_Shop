import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './ContactPage.css';

import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      toast.success('✅ Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('❌ Failed to send message: ' + error.message);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-left glass">
          <h2>Let’s Talk</h2>
          <p>We’re here to help and answer any question you might have.</p>
          <div className="contact-detail">
            <h4>Email</h4>
            <p>jamilansari828@gmail.com</p>
            <h4>Phone</h4>
            <p>+91 9320716786</p>
            <h4>Address</h4>
            <p>Navi Mumbai, India</p>
          </div>

          <div className="contact-map">
            <iframe
              title="Location"
              src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <form className="contact-right glass" onSubmit={handleSubmit}>
          <h2>Contact Form</h2>

          <div className="input-group">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <label>Subject</label>
          </div>

          <div className="input-group">
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
            <label>Message</label>
          </div>

          <button type="submit" className="submit-btn">
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
