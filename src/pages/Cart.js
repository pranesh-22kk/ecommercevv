import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { Card, Button } from '../components/common';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa';
import { formatPrice } from '../utils/helpers';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <FaShoppingCart className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Button as={Link} to="/products" size="large">
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
          <p>Review your items and proceed to checkout</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-header">
              <h2>Cart Items ({cartItems.length})</h2>
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="clear-cart-btn"
              >
                Clear Cart
              </Button>
            </div>

            {cartItems.map(item => (
              <Card key={item.id} className="cart-item">
                <div className="item-image">
                  <img 
                    src={item.thumbnail || `https://via.placeholder.com/150x150/f0f0f0/333?text=${item.name}`}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/150x150/f0f0f0/333?text=${item.name}`;
                    }}
                  />
                </div>
                
                <div className="item-details">
                  <Link to={`/product/${item.slug}`} className="item-name">
                    {item.name}
                  </Link>
                  <p className="item-description">{item.description}</p>
                  <div className="item-price">
                    <span className="current-price">{formatPrice(item.price)}</span>
                    {item.originalPrice && (
                      <span className="original-price">{formatPrice(item.originalPrice)}</span>
                    )}
                  </div>
                </div>

                <div className="item-quantity">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <FaMinus />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  <span className="total-label">Total:</span>
                  <span className="total-price">{formatPrice(item.price * item.quantity)}</span>
                </div>

                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </Card>
            ))}
          </div>

          <div className="cart-summary">
            <Card className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span className="shipping-free">Free</span>
                </div>
                <div className="summary-row">
                  <span>Tax:</span>
                  <span>{formatPrice(cartTotal * 0.08)}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>{formatPrice(cartTotal * 1.08)}</span>
                </div>
              </div>

              <div className="summary-actions">
                <Button 
                  size="large" 
                  fullWidth 
                  as={Link} 
                  to="/checkout"
                  className="checkout-btn"
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  size="large" 
                  fullWidth 
                  as={Link} 
                  to="/products"
                  className="continue-shopping-btn"
                >
                  <FaArrowLeft /> Continue Shopping
                </Button>
              </div>
            </Card>

            <Card className="promo-card">
              <h4>Have a Promo Code?</h4>
              <div className="promo-input">
                <input 
                  type="text" 
                  placeholder="Enter promo code"
                  className="promo-code-input"
                />
                <Button variant="outline">Apply</Button>
              </div>
            </Card>

            <Card className="shipping-card">
              <h4>🚚 Free Shipping</h4>
              <p>Enjoy free shipping on all orders over $50. Your order qualifies!</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;