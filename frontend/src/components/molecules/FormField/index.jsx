// Author: Christin Saji

/* eslint-disable react/prop-types */
import React from 'react';

const FormField = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  label,
  error,
  readOnly,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-bsnavyblue font-semibold">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={name}
      className={`w-full px-4 py-2 border ring-1 ring-bsnavyblue rounded-md focus:outline-none focus:ring-2 focus:ring-bsnavyblue 
        ${error ? 'border-red-500 ring-0' : 'border-gray-950'}`}
      readOnly={readOnly}
    />
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

export default FormField;
