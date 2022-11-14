import React, {useCallback} from 'react';

import './styles.css';

export interface ImageButtonProps {
  imageAlt: string;
  imageSrc: string;
  onClick: () => void;
  classNames?: string;
  text?: string;
}

export const ImageButton = ({
  classNames = '',
  imageAlt,
  imageSrc,
  onClick,
  text = '',
}: ImageButtonProps) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <div className={`image-button ${classNames}`} onClick={handleClick} role="button">
      <img src={imageSrc} alt={imageAlt} />
      <div className="image-button-text">{text}</div>
    </div>
  );
};
