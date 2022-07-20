import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, Content } from './style';

const Modal = ({
  children,
  close,
  isVisible,
  onClose,
  contentStyle
}) => {

  React.useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';
  }, [isVisible]);

  const handleClickOutside = async (e) => {
    await onClose?.();
    close();
  };

  if (!isVisible) {
    return null;
  };

  return (
    <ModalWrapper onClick={handleClickOutside}>
      <Content onClick={e => e.stopPropagation()} style={contentStyle || {}}>
        {children}
      </Content>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Modal;
