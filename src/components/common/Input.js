import React, { useState } from 'react';
import './Input.css';

const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = '',
  icon,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getInputClass = () => {
    let classes = 'input-field';
    if (error) classes += ' input-error';
    if (disabled) classes += ' input-disabled';
    if (focused) classes += ' input-focused';
    if (icon) classes += ' input-with-icon';
    if (className) classes += ` ${className}`;
    return classes;
  };

  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {icon && <div className="input-icon">{icon}</div>}
        <input
          type={type}
          className={getInputClass()}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          required={required}
          {...props}
        />
      </div>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default Input;