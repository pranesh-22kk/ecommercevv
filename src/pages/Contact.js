import React, { useState } from 'react';
import { Card, Button, Input } from '../components/common';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <Card className="contact-form-card">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  required
                  className="contact-textarea"
                />
              </div>
              
              <Button
                type="submit"
                size="large"
                fullWidth
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="contact-info">
            <Card className="contact-info-card">
              <h3>Get in Touch</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>123 Shopping Street<br />Commerce City, CC 12345<br />United States</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>support@shopeasy.com<br />info@shopeasy.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-text">
                    <h4>Business Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="social-media-card">
              <h3>Follow Us</h3>
              <p>Stay connected with us on social media for the latest updates and deals!</p>
              <div className="social-links">
                <a href="https://facebook.com/shopeasy" className="social-link facebook">
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
                <a href="https://twitter.com/shopeasy" className="social-link twitter">
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
                <a href="https://instagram.com/shopeasy" className="social-link instagram">
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a href="https://linkedin.com/company/shopeasy" className="social-link linkedin">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How can I track my order?</h4>
              <p>Once your order ships, you'll receive a tracking number via email. You can use this to track your package on our website or the carrier's site.</p>
            </div>
            <div className="faq-item">
              <h4>What is your return policy?</h4>
              <p>We offer a 30-day return policy on most items. Products must be in original condition with tags attached. Digital items are non-returnable.</p>
            </div>
            <div className="faq-item">
              <h4>Do you ship internationally?</h4>
              <p>Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. Check our shipping page for more details.</p>
            </div>
            <div className="faq-item">
              <h4>How can I change or cancel my order?</h4>
              <p>Orders can be modified or cancelled within 1 hour of placement. After that, please contact our customer service team for assistance.</p>
            </div>
          </div>
        </Card>

        {/* Map Section */}
        <Card className="map-section">
          <h2>Find Our Store</h2>
          <div className="map-placeholder">
            <img 
              src="https://via.placeholder.com/800x400/e0e0e0/666?text=Interactive+Map+Coming+Soon"
              alt="Store Location Map"
              className="map-image"
            />
            <div className="map-overlay">
              <div className="store-info">
                <h3>ShopEasy Flagship Store</h3>
                <p>123 Shopping Street, Commerce City</p>
                <Button as="a" href="https://maps.google.com" target="_blank">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;