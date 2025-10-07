import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const getButtonClass = () => {
    let classes = `btn btn-${variant} btn-${size}`;
    if (disabled || loading) classes += ' btn-disabled';
    if (className) classes += ` ${className}`;
    return classes;
  };

  return (
    <button
      type={type}
      className={getButtonClass()}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="btn-loading">
          <div className="loading-spinner"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;