import React from 'react';
import './Loading.css';

const Loading = ({ 
  size = 'medium', 
  type = 'spinner',
  text = '',
  fullScreen = false,
  className = ''
}) => {
  const getLoadingClass = () => {
    let classes = `loading loading-${type} loading-${size}`;
    if (fullScreen) classes += ' loading-fullscreen';
    if (className) classes += ` ${className}`;
    return classes;
  };

  const LoadingSpinner = () => (
    <div className="spinner">
      <div className="spinner-circle"></div>
    </div>
  );

  const LoadingDots = () => (
    <div className="dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );

  const LoadingPulse = () => (
    <div className="pulse">
      <div className="pulse-circle"></div>
    </div>
  );

  const LoadingBars = () => (
    <div className="bars">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );

  const renderLoading = () => {
    switch (type) {
      case 'dots':
        return <LoadingDots />;
      case 'pulse':
        return <LoadingPulse />;
      case 'bars':
        return <LoadingBars />;
      default:
        return <LoadingSpinner />;
    }
  };

  return (
    <div className={getLoadingClass()}>
      {renderLoading()}
      {text && <div className="loading-text">{text}</div>}
    </div>
  );
};

export default Loading;