// Author: Christin Saji

/* eslint-disable react/prop-types */
import React from 'react';

const CheckboxField = ({
  label,
  checked,
  onChange,
  name,
  error,
  className = '',
}) => (
  <div className={`flex flex-col ${className}`}>
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        id={name}
        className="form-checkbox h-4 w-4 text-bsnavyblue"
      />
      <label htmlFor={name} className="ml-2 text-gray-900">{label}</label>
    </div>
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

export default CheckboxField;
