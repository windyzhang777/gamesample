import React, {ReactElement, useState, useEffect} from 'react';
import styles from './Modal.module.css';

export interface ModalProps {
  backgroundImageSrc?: string;
  className?: string;
  children: ReactElement | ReactElement[];
  closeText?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({
  backgroundImageSrc,
  className = '',
  children,
  closeText = 'Cancel',
  isOpen,
  onClose,
}: ModalProps) => {
  const [internalClasses, setInternalClasses] = useState([styles.Modal]);
  useEffect(() => {
    setInternalClasses(
      isOpen ? [styles.Modal, styles.ModalVisible, className] : [styles.Modal, className],
    );
  }, [className, isOpen]);

  return (
    <div
      className={internalClasses.join(' ')}
      style={{backgroundImage: `url(${backgroundImageSrc})`}}>
      {children}
      <input className={styles.ModelClose} type="button" onClick={onClose} value={closeText} />
    </div>
  );
};
