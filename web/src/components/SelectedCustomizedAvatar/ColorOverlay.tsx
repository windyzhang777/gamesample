import React from 'react';
import classes from './SelectedCutomizedAvatar.module.css';
export interface ColorOverlayProps {
  // user selected color to set background
  selectedColor: string;
  // The color layer mask image
  assetImageMaskWeb: string;
  style?: Record<string, string>;
}

// The solid piece we can color for the door
function DoorColorOverlay({assetImageMaskWeb, selectedColor, style}: ColorOverlayProps) {
  return (
    <div
      className={classes.ColorMask}
      style={{
        background: `${selectedColor}`,
        WebkitMaskImage: `url(${assetImageMaskWeb})`,
        maskImage: `url(${assetImageMaskWeb})`,
        ...style,
      }}
    />
  );
}

export default DoorColorOverlay;
