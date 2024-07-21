/* eslint-disable react/prop-types */
import React from 'react';
import Checkbox from '../../atoms/checkbox';

const CheckboxField = ({
  label,
  checked,
  onChange,
  name,
}) => (
  <div>
    <Checkbox label={label} checked={checked} onChange={onChange} name={name} />
  </div>
);

export default CheckboxField;
