import React from 'react';
import classes from './ColorButton.module.css';

export interface ColorButtonProps {
  color: string;
  isActive: boolean;
  onClick: (color: string) => void;
}

const ColorButton = ({color, isActive, onClick}: ColorButtonProps) => {
  const elementClasses = [classes.ColorButton, isActive ? classes.Active : ''];
  // () => updateDoor({selectedColor: color})
  return (
    <button
      className={elementClasses.join(' ')}
      style={{background: `${color}`}}
      onClick={() => onClick(color)}
    />
  );
};

export default ColorButton;
