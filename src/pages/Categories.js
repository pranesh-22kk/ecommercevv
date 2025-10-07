import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/common';
import { categories } from '../data/mockData';
import './Categories.css';

const Categories = () => {
  const [imageLoadStates, setImageLoadStates] = useState({});

  const handleImageLoad = (categoryId) => {
    setImageLoadStates(prev => ({
      ...prev,
      [categoryId]: 'loaded'
    }));
  };

  const handleImageError = (categoryId, event) => {
    setImageLoadStates(prev => ({
      ...prev,
      [categoryId]: 'error'
    }));
    event.target.src = `https://via.placeholder.com/400x250/f0f0f0/333?text=${encodeURIComponent(categories.find(c => c.id === categoryId)?.name || 'Category')}`;
  };

  return (
    <div className="categories-page">
      <div className="container">
        <div className="page-header">
          <h1>Shop by Categories</h1>
          <p>Explore our wide range of product categories and find exactly what you're looking for.</p>
        </div>

        <div className="categories-grid">
          {categories.map(category => (
            <Card key={category.id} className="category-card" hoverable>
              <Link to={`/category/${category.slug}`} className="category-link">
                <div className="category-image">
                  {imageLoadStates[category.id] !== 'loaded' && (
                    <div className="image-placeholder">
                      <div className="loading-shimmer"></div>
                    </div>
                  )}
                  <img 
                    src={category.image || `https://via.placeholder.com/400x250/f0f0f0/333?text=${encodeURIComponent(category.name)}`}
                    alt={category.name}
                    onLoad={() => handleImageLoad(category.id)}
                    onError={(e) => handleImageError(category.id, e)}
                    style={{ 
                      opacity: imageLoadStates[category.id] === 'loaded' ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="subcategories">
                    {category.subcategories && category.subcategories.slice(0, 3).map((sub, index) => (
                      <span key={index} className="subcategory-tag">{sub.name}</span>
                    ))}
                    {category.subcategories && category.subcategories.length > 3 && (
                      <span className="subcategory-tag">+{category.subcategories.length - 3} more</span>
                    )}
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;