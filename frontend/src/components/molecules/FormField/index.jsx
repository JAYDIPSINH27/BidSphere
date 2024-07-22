// Author: Christin Saji

/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../../atoms/input';

const FormField = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  label,
  error,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block">{label}</label>
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={name}
      className={error ? 'border-red-500' : 'border-gray-950'}
    />
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

export default FormField;
