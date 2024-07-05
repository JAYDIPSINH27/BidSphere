import React from 'react';

function Button({ type = 'button', children, onClick = () => {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-2 text-white bg-bsnavyblue rounded-md focus:outline-none focus:ring-2 focus:ring-bsnavyblue"
    >
      {children}
    </button>
  );
}

export default Button;
