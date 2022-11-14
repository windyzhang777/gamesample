import classes from './CustomizedDoor.module.css';
import React from 'react';

export interface GrayscaleDoorProps {
  // Source of the grayscale door image
  image: string;
  alt: string;
}

function GrayscaleDoor({image, alt}: GrayscaleDoorProps) {
  return <img className={classes.BaseDoor} src={image} alt={alt} />;
}

export default GrayscaleDoor;
