import React from 'react';
import { Card, Button } from '../components/common';
import { FaTruck, FaShieldAlt, FaHeadset, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: 'Fast Delivery',
      description: 'Get your orders delivered quickly with our express shipping options.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Shopping',
      description: 'Shop with confidence using our secure payment processing system.'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Support',
      description: 'Our customer service team is available round the clock to help you.'
    },
    {
      icon: <FaAward />,
      title: 'Quality Products',
      description: 'We carefully curate our products to ensure the highest quality standards.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/200x200/4285f4/fff?text=SJ',
      description: 'Leading the company with 10+ years of e-commerce experience.'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      image: 'https://via.placeholder.com/200x200/34a853/fff?text=MC',
      description: 'Technology expert ensuring our platform runs smoothly.'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Marketing',
      image: 'https://via.placeholder.com/200x200/ea4335/fff?text=ED',
      description: 'Creative marketing strategies to connect with our customers.'
    },
    {
      name: 'David Wilson',
      role: 'Customer Success',
      image: 'https://via.placeholder.com/200x200/fbbc04/fff?text=DW',
      description: 'Dedicated to ensuring every customer has an amazing experience.'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About ShopEasy</h1>
            <p className="hero-subtitle">
              Your trusted online shopping destination since 2020
            </p>
            <p className="hero-description">
              We're passionate about bringing you the best products at amazing prices, 
              with exceptional customer service that makes shopping a joy.
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="https://via.placeholder.com/500x400/f0f0f0/333?text=Shopping+Experience"
              alt="About Us"
            />
          </div>
        </section>

        {/* Story Section */}
        <section className="our-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, ShopEasy began as a small startup with a big dream: 
              to revolutionize online shopping by making it more accessible, affordable, 
              and enjoyable for everyone.
            </p>
            <p>
              Today, we serve thousands of happy customers worldwide, offering a carefully 
              curated selection of products across multiple categories. Our commitment to 
              quality, customer satisfaction, and innovation drives everything we do.
            </p>
            <div className="story-stats">
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="our-features">
          <h2>Why Choose ShopEasy?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="our-team">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Behind every great shopping experience is a dedicated team of professionals 
            working to make your experience exceptional.
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <Card key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="our-mission">
          <Card className="mission-card">
            <h2>Our Mission</h2>
            <p>
              To provide an exceptional online shopping experience that combines quality products, 
              competitive prices, and outstanding customer service. We believe that shopping should 
              be convenient, secure, and enjoyable for everyone.
            </p>
            <div className="mission-values">
              <div className="value-item">
                <strong>Quality:</strong> We never compromise on the quality of products we offer.
              </div>
              <div className="value-item">
                <strong>Trust:</strong> Building long-term relationships based on trust and transparency.
              </div>
              <div className="value-item">
                <strong>Innovation:</strong> Continuously improving our platform and services.
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to Start Shopping?</h2>
          <p>Join thousands of satisfied customers and discover amazing deals today!</p>
          <div className="cta-buttons">
            <Button size="large" as="a" href="/products">
              Browse Products
            </Button>
            <Button variant="outline" size="large" as="a" href="/contact">
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;