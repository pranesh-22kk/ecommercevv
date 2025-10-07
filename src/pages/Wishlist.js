import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import WishlistContext from '../context/WishlistContext';
import CartContext from '../context/CartContext';
import { Card, Button } from '../components/common';
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { formatPrice } from '../utils/helpers';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(item.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="container">
          <div className="empty-wishlist">
            <FaHeart className="empty-wishlist-icon" />
            <h2>Your wishlist is empty</h2>
            <p>Save items you love to your wishlist and shop them later.</p>
            <Button as={Link} to="/products" size="large">
              Start Browsing
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="page-header">
          <h1>My Wishlist</h1>
          <p>Items you've saved for later ({wishlistItems.length})</p>
        </div>

        <div className="wishlist-actions">
          <Button 
            variant="outline" 
            onClick={clearWishlist}
            className="clear-wishlist-btn"
          >
            Clear Wishlist
          </Button>
        </div>

        <div className="wishlist-grid">
          {wishlistItems.map(item => (
            <Card key={item.id} className="wishlist-item" hoverable>
              <div className="item-image">
                <Link to={`/product/${item.slug}`}>
                  <img 
                    src={item.thumbnail || `https://via.placeholder.com/300x250/f0f0f0/333?text=${item.name}`}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x250/f0f0f0/333?text=${item.name}`;
                    }}
                  />
                </Link>
                {item.onSale && (
                  <div className="sale-badge">-{item.discountPercentage}%</div>
                )}
                <button
                  className="remove-wishlist-btn"
                  onClick={() => removeFromWishlist(item.id)}
                  title="Remove from wishlist"
                >
                  <FaTrash />
                </button>
              </div>
              
              <div className="item-content">
                <Link to={`/product/${item.slug}`} className="item-name">
                  {item.name}
                </Link>
                <p className="item-description">{item.description}</p>
                
                <div className="item-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`star ${i < Math.floor(item.rating) ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-count">({item.reviewCount})</span>
                </div>

                <div className="item-price">
                  <span className="current-price">{formatPrice(item.price)}</span>
                  {item.originalPrice && (
                    <span className="original-price">{formatPrice(item.originalPrice)}</span>
                  )}
                </div>

                <div className="item-availability">
                  {item.stock > 0 ? (
                    <span className="in-stock">✓ In Stock</span>
                  ) : (
                    <span className="out-of-stock">✗ Out of Stock</span>
                  )}
                </div>

                <div className="item-actions">
                  <Button
                    onClick={() => handleAddToCart(item)}
                    disabled={item.stock === 0}
                    className="add-to-cart-btn"
                    fullWidth
                  >
                    <FaShoppingCart /> Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="wishlist-footer">
          <Card className="share-wishlist">
            <h3>Share Your Wishlist</h3>
            <p>Let friends and family know what you're hoping for!</p>
            <div className="share-buttons">
              <Button variant="outline" size="small">
                Copy Link
              </Button>
              <Button variant="outline" size="small">
                Share via Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;