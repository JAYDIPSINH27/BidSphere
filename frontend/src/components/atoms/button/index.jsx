import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({
  type = 'button',
  children,
  classname,
  style = {},
  onClick = () => {},
  ...rest
}) => (
  <button
    type={type}
    onClick={onClick}
    style={{ ...style }}
    className={cx('px-6 py-2 text-white bg-bsnavyblue rounded-md focus:outline-none focus:ring-2 focus:ring-bsnavyblue', classname)}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: 'button',
  classname: '',
  onClick: () => {},
  style: {},
};

export default Button;
