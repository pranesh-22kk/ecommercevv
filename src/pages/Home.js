import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShippingFast, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import { Card, Button } from '../components/common';
import { featuredProducts, newArrivals, categories } from '../data/mockData';
import { formatPrice } from '../utils/helpers';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Welcome to ShopEasy</h1>
              <p>Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.</p>
              <div className="hero-actions">
                <Button size="large" as={Link} to="/products">
                  Shop Now <FaArrowRight />
                </Button>
                <Button variant="outline" size="large" as={Link} to="/deals">
                  View Deals
                </Button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/hero-shopping.jpg" alt="Shopping" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FaShippingFast />
              </div>
              <h3>Free Shipping</h3>
              <p>Free shipping on orders over $50</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Secure Payment</h3>
              <p>100% secure payment processing</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaHeadset />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Browse our wide range of categories</p>
          </div>
          <div className="categories-grid">
            {categories.slice(0, 5).map(category => (
              <Link 
                key={category.id} 
                to={`/category/${category.slug}`} 
                className="category-card"
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Handpicked products just for you</p>
            <Link to="/products?featured=true" className="view-all-link">
              View All <FaArrowRight />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.slice(0, 4).map(product => (
              <Card key={product.id} className="product-card" hoverable>
                <Link to={`/product/${product.slug}`}>
                  <div className="product-image">
                    <img src={product.thumbnail} alt={product.name} />
                    {product.onSale && (
                      <span className="sale-badge">-{product.discountPercentage}%</span>
                    )}
                    {product.isNew && (
                      <span className="new-badge">New</span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-rating">
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
                      <span className="rating-count">({product.reviewCount})</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="original-price">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="new-arrivals">
        <div className="container">
          <div className="section-header">
            <h2>New Arrivals</h2>
            <p>Check out our latest products</p>
            <Link to="/products?new=true" className="view-all-link">
              View All <FaArrowRight />
            </Link>
          </div>
          <div className="products-grid">
            {newArrivals.slice(0, 4).map(product => (
              <Card key={product.id} className="product-card" hoverable>
                <Link to={`/product/${product.slug}`}>
                  <div className="product-image">
                    <img src={product.thumbnail} alt={product.name} />
                    <span className="new-badge">New</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-rating">
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
                      <span className="rating-count">({product.reviewCount})</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">{formatPrice(product.price)}</span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay in the Loop</h2>
            <p>Subscribe to our newsletter for exclusive deals, new arrivals, and special offers!</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <Button type="submit" size="large">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;