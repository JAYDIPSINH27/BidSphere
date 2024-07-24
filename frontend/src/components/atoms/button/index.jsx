/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({
  type = 'button',
  children,
  onClick = () => {},
  className = '',
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-6 py-2 text-white bg-bsnavyblue rounded-md focus:outline-none focus:ring-2 focus:ring-bsnavyblue ${className}`}
  >
    {children}
  </button>
);

export default Button;
