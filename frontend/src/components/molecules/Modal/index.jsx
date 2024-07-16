import React from 'react';
import PropTypes from 'prop-types';
import { Modal as AntdModal, Button } from 'antd';

const Modal = ({
  open,
  onOk,
  onCancel,
  title,
  children,
  ...rest
}) => {
  const handleOk = () => {
    onOk();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <AntdModal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="post" type="primary" onClick={handleOk}>
          Post
        </Button>,
      ]}
      {...rest}
    >
      {children}
    </AntdModal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
