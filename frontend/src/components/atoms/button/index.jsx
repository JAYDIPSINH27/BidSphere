/* eslint-disable react/prop-types */
import React from 'react';
import cx from 'classnames';

const Button = ({
  type = 'button',
  children,
  onClick = () => {},
  classname = '',
  ...rest
}) => (
  <button
    type={type}
    onClick={onClick}
    className={cx('px-6 py-2 text-white bg-bsnavyblue rounded-md focus:outline-none focus:ring-2 focus:ring-bsnavyblue', classname)}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
