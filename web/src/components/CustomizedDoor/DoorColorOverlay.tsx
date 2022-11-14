import React from 'react';
import classes from './CustomizedDoor.module.css';
export interface DoorColorOverlayProps {
  // user selected color to set background
  selectedColor: string;
  // The color layer mask image
  doorImageMaskWeb: string;
}

// The solid piece we can color for the door
function DoorColorOverlay({doorImageMaskWeb, selectedColor}: DoorColorOverlayProps) {
  return (
   <div
     className={classes.ColorMask}
     style={{
       background: `${selectedColor}`,
       WebkitMaskImage: `url(${doorImageMaskWeb})`,
       maskImage: `url(${doorImageMaskWeb})`,
     }}
   />
  );
}

export default DoorColorOverlay;
