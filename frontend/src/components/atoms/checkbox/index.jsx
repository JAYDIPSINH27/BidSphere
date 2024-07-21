/* eslint-disable react/prop-types */
import React from 'react';

const Checkbox = ({
  label,
  checked,
  onChange,
  name,
  className = '',
}) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      name={name}
      id={name}
      className={`appearance-none h-4 w-4 border border-bsnavyblue rounded-sm bg-white checked:bg-bslightblue ${className}`}
    />
    <label htmlFor={name} className="ml-2 text-gray-900">{label}</label>
  </div>
);

export default Checkbox;
