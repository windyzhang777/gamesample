import React from 'react';
import {CustomizedDoorProps} from './props';
import classes from './CustomizedDoor.module.css';

// --- Web Specific Props ---
export interface GrayscaleDoorProps {
  // Source of the grayscale door image
  image: string;
  alt: string;
}

export interface DoorColorOverlayProps {
  // user selected color to set background
  selectedColor: string;
  // The color layer mask image
  doorImageMaskWeb: string;
}

export interface DecorationOverlayProps {
  // The source of the decoration image
  image: string;
  // The source of the mask layer
  maskImage: string;
}

// --- Helper components ---
const GrayscaleDoor = ({image, alt}: GrayscaleDoorProps) => (
  <img className={classes.BaseDoor} src={image} alt={alt} />
);

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

function DecorationOverlay({image, maskImage}: DecorationOverlayProps) {
  return (
    <img
      className={classes.DoorDecoration}
      src={image}
      style={{
        WebkitMaskImage: `url(${maskImage})`,
        maskImage: `url(${maskImage})`,
      }}
      alt=""
    />
  );
}

// --- CustomizedDoor Component ---
const CustomizedDoor = ({
  currentDoorCustomizations,
  contentState,
  decorations,
  doorColor,
}: CustomizedDoorProps) => {
  if (!currentDoorCustomizations.doors) {
    return <p>No selected door</p>;
  }

  const {doorImageMaskWeb, grayscaleImage, doorDetailsImage} = {
    doorImageMaskWeb:
      contentState[
        'doors/' +
          currentDoorCustomizations.doors +
          '/' +
          currentDoorCustomizations.doors +
          '_mask.svg'
      ],
    grayscaleImage:
      contentState[
        'doors/' + currentDoorCustomizations.doors + '/' + currentDoorCustomizations.doors + '.png'
      ],
    doorDetailsImage:
      contentState[
        'doors/' +
          currentDoorCustomizations.doors +
          '/' +
          currentDoorCustomizations.doors +
          '_details.png'
      ],
  };

  return (
    <div className={classes.DoorElement}>
      <GrayscaleDoor alt={''} image={grayscaleImage} />
      <DoorColorOverlay doorImageMaskWeb={doorImageMaskWeb} selectedColor={doorColor} />
      <DecorationOverlay image={doorDetailsImage} maskImage={doorImageMaskWeb} />
      {decorations.map((itemId: string) => (
        <DecorationOverlay
          key={itemId}
          image={contentState['decorations/' + itemId + '/' + itemId + '.png']}
          maskImage={doorImageMaskWeb}
        />
      ))}
    </div>
  );
};

export default CustomizedDoor;
