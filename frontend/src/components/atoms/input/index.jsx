/* eslint-disable react/prop-types */
import React from 'react';

function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  className,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-bsnavyblue ${className}`}
    />
  );
}

export default Input;
