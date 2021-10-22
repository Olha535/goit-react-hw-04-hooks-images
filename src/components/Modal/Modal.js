import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ showModal, tags, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', onCloseModal);
    return () => {
      window.removeEventListener('keydown', onCloseModal);
    };
  });

  const onCloseModal = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={onCloseBackdrop}>
      <div className={s.modal}>
        <img src={showModal} alt={tags} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  showModal: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
