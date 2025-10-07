import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Input } from '../components/common';
import { FaSearch, FaThLarge, FaList, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { products, categories } from '../data/mockData';
import { formatPrice } from '../utils/helpers';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1>All Products</h1>
          <p>Discover our complete collection of amazing products</p>
        </div>

        {/* Filters and Search */}
        <div className="products-controls">
          <div className="search-section">
            <Input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<FaSearch />}
              className="products-search"
            />
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <label>Category:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort by:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <FaThLarge />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="results-info">
          <p>Showing {filteredProducts.length} of {products.length} products</p>
        </div>

        {/* Products Grid/List */}
        <div className={`products-container ${viewMode}`}>
          {filteredProducts.map(product => (
            <Card key={product.id} className={`product-card ${viewMode}`} hoverable>
              <div className="product-image">
                <Link to={`/product/${product.slug}`}>
                  <img 
                    src={product.thumbnail || `https://via.placeholder.com/300x250/f0f0f0/333?text=${product.name}`}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x250/f0f0f0/333?text=${product.name}`;
                    }}
                  />
                </Link>
                {product.onSale && (
                  <div className="sale-badge">-{product.discountPercentage}%</div>
                )}
                {product.isNew && (
                  <div className="new-badge">New</div>
                )}
                <div className="product-actions">
                  <button className="action-btn wishlist-btn" title="Add to Wishlist">
                    <FaHeart />
                  </button>
                  <button className="action-btn cart-btn" title="Add to Cart">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
              
              <div className="product-content">
                <Link to={`/product/${product.slug}`} className="product-title">
                  {product.name}
                </Link>
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
                  <span className="rating-text">({product.reviewCount})</span>
                </div>

                <div className="product-price">
                  <span className="current-price">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>

                <div className="product-meta">
                  <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search criteria or browse all categories.</p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
              setPriceRange([0, 2000]);
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
