import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from '../components/common';
import { products } from '../data/mockData';
import { formatPrice } from '../utils/helpers';
import './Deals.css';

const Deals = () => {
  // Filter products that are on sale
  const dealProducts = products.filter(product => product.onSale);
  
  return (
    <div className="deals-page">
      <div className="container">
        <div className="page-header">
          <h1>🔥 Hot Deals & Offers</h1>
          <p>Don't miss out on these amazing discounts! Limited time offers on your favorite products.</p>
        </div>

        <div className="deals-banner">
          <div className="banner-content">
            <h2>Flash Sale!</h2>
            <p>Up to 70% off on selected items</p>
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-number">23</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">45</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">12</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
          </div>
          <div className="banner-image">
            <img 
              src="https://via.placeholder.com/400x300/ff6b6b/fff?text=Flash+Sale"
              alt="Flash Sale"
            />
          </div>
        </div>

        <div className="deals-grid">
          {dealProducts.map(product => (
            <Card key={product.id} className="deal-card" hoverable>
              <Link to={`/product/${product.slug}`} className="deal-link">
                <div className="deal-image">
                  <img 
                    src={product.thumbnail || `https://via.placeholder.com/300x250/f0f0f0/333?text=${product.name}`}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x250/f0f0f0/333?text=${product.name}`;
                    }}
                  />
                  <div className="deal-badge">
                    -{product.discountPercentage}%
                  </div>
                  <div className="deal-timer">
                    <span>⏰ Limited Time</span>
                  </div>
                </div>
                <div className="deal-content">
                  <h3>{product.name}</h3>
                  <p className="deal-description">{product.description}</p>
                  <div className="deal-pricing">
                    <span className="current-price">{formatPrice(product.price)}</span>
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                    <span className="savings">Save {formatPrice(product.originalPrice - product.price)}</span>
                  </div>
                  <div className="deal-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="rating-text">({product.reviewCount} reviews)</span>
                  </div>
                </div>
              </Link>
              <div className="deal-actions">
                <Button className="add-to-cart-btn" fullWidth>
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {dealProducts.length === 0 && (
          <div className="no-deals">
            <h3>No active deals at the moment</h3>
            <p>Check back later for amazing offers!</p>
            <Button as={Link} to="/products">
              Browse All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deals;