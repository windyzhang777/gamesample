import classes from './SelectedCutomizedAvatar.module.css';
import React from 'react';

export interface GrayscaleAssetProps {
  // Source of the grayscale asset
  image: string;
  alt: string;
  // any styling regards to zIndex or additional properties
  style?: Record<string, string>;
}

function GrayscaleAsset({image, alt, style}: GrayscaleAssetProps) {
  return (
    <>
      {image ? <img className={classes.BaseAvatar} style={{...style}} src={image} alt={alt} />: <></>}
    </>
  );
}

export default GrayscaleAsset;
