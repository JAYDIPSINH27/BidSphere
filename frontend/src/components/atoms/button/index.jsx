import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton } from 'antd';

const Button = ({
  children,
  onClick = () => {},
  ...rest
}) => (
  <AntButton
    type="primary"
    onClick={onClick}
    {...rest}
  >
    {children}
  </AntButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
