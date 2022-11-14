import React from 'react';
import classes from './CustomizedAvatar.module.css';

export interface ColorOverlayProps {
  // The color layer mask image
  imageMaskWeb: string;
  // user selected color to set background
  selectedColor: string;
  style?: Record<string, string>;
}

// The solid piece we can color for the door
function ColorOverlayAvatar({imageMaskWeb, selectedColor, style}: ColorOverlayProps) {
  return (
    <div
      className={classes.ColorMask}
      style={{
        background: `${selectedColor}`,
        WebkitMaskImage: `url(${imageMaskWeb})`,
        maskImage: `url(${imageMaskWeb})`,
        ...style,
      }}
    />
  );
}

export default ColorOverlayAvatar;
