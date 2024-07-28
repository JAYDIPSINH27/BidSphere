// Author: Vraj Sunilkumar Shah

import React from 'react';

const BaseButton = ({ children, className, onClick }) => (
  <button className={`py-2 px-4 rounded ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default BaseButton;
