import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaSearch, 
  FaShoppingCart, 
  FaUser, 
  FaHeart, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa';
import { Button, Input } from '../common';
import CartContext from '../../context/CartContext';
import WishlistContext from '../../context/WishlistContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  
  const cartCount = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  const wishlistCount = wishlistItems ? wishlistItems.length : 0;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <h1>ShopEasy</h1>
          </Link>

          {/* Search Bar */}
          <form className="header-search" onSubmit={handleSearch}>
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<FaSearch />}
              className="search-input"
            />
            <Button type="submit" size="medium" className="search-button">
              Search
            </Button>
          </form>

          {/* Navigation */}
          <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <Link to="/deals" className="nav-link">Deals</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <Link to="/wishlist" className="action-link">
              <FaHeart />
              {wishlistCount > 0 && (
                <span className="action-badge">{wishlistCount}</span>
              )}
            </Link>
            
            <Link to="/cart" className="action-link">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="action-badge">{cartCount}</span>
              )}
            </Link>
            
            <Link to="/account" className="action-link">
              <FaUser />
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="medium"
              className="mobile-menu-toggle"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <form className="mobile-search" onSubmit={handleSearch}>
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={<FaSearch />}
            className="search-input"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;