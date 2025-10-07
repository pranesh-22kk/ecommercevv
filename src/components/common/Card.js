import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  shadow = 'base',
  padding = 'medium',
  onClick,
  hoverable = false,
  ...props 
}) => {
  const getCardClass = () => {
    let classes = `card card-shadow-${shadow} card-padding-${padding}`;
    if (hoverable || onClick) classes += ' card-hoverable';
    if (className) classes += ` ${className}`;
    return classes;
  };

  const CardElement = onClick ? 'button' : 'div';

  return (
    <CardElement
      className={getCardClass()}
      onClick={onClick}
      {...props}
    >
      {children}
    </CardElement>
  );
};

export default Card;