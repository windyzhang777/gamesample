import React from 'react';
import classes from './CustomizedAvatar.module.css';

export interface GrayscaleProps {
  // Source of the grayscale avatar image
  image: string;
  alt: string;
  // any styling regards to zIndex or additional properties
  style?: Record<string, string>;
}

function GrayscaleAvatar({image, alt, style}: GrayscaleProps) {
  return <img className={classes.BaseAvatar} style={{...style}} src={image} alt={alt} />;
}

export default GrayscaleAvatar;
