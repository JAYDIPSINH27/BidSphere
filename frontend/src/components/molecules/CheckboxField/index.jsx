// Author: Christin Saji

/* eslint-disable react/prop-types */
import React from 'react';
import Checkbox from '../../atoms/checkbox';

const CheckboxField = ({
  label,
  checked,
  onChange,
  name,
  error,
  className = '',
}) => (
  <div className={`flex flex-col ${className}`}>
    <Checkbox
      label={label}
      checked={checked}
      onChange={onChange}
      name={name}
    />
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

export default CheckboxField;
