import React from 'react';
import CustomizedDoorShared, {CustomizedDoorRenderProps} from 'shared/containers/CustomizedDoor';
import DoorColorOverlay from './DoorColorOverlay';
import {useSelector} from 'react-redux';
import GrayscaleDoor from './GrayscaleDoor';
import DecorationOverlay from './DecorationOverlay';
import classes from './CustomizedDoor.module.css';

// The Render Component will take all the shared props/state from a shared component and use that to render in
// the platform specific way.  There should not be any logic here.  This will be view only.
const CustomizedDoorRenderComponent = ({
  currentDoorCustomizations,
  contentState,
  doorColor,
}: CustomizedDoorRenderProps) => {
  if (!currentDoorCustomizations.doors) {
    return <p>No selected door</p>;
  }

  if (!currentDoorCustomizations.doors) {
    return <p>No selected door [{currentDoorCustomizations.doors}] not found in doors.</p>;
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
      {currentDoorCustomizations.decorations.map((itemId: string) => (
        <DecorationOverlay
          key={itemId}
          image={contentState['decorations/' + itemId + '/' + itemId + '.png']}
          maskImage={doorImageMaskWeb}
        />
      ))}
    </div>
  );
};

// This would be the component that could be used / shared within the web project
const CustomizedDoor = () => (
  <CustomizedDoorShared renderComponent={CustomizedDoorRenderComponent} useSelector={useSelector} />
);

export default CustomizedDoor;
