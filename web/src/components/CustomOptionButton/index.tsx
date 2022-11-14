import React from 'react';
import classes from './CustomOptionButton.module.css';
import {CustomOption} from 'shared/models/CustomOption';

export interface CustomOptionButtonProps {
  id: string;
  image: string;
  alt: string;
  isActive: boolean;
  onClick: (option: CustomOption) => void;
}

const CustomOptionButton = ({id, image, alt, isActive, onClick}: CustomOptionButtonProps) => {
  const elementClasses = [classes.CustomOptionButton, isActive ? classes.Active : ''];
  return (
    <img src={image} alt={alt} className={elementClasses.join(' ')} onClick={() => onClick({id})} />
  );
};

export default CustomOptionButton;
