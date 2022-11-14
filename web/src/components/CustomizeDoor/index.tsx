import React, {useEffect} from 'react';
import CustomizeDoorShared, {
  CustomizeDoorRenderComponentProps,
} from 'shared/containers/CustomizeDoor';

import {useDispatch, useSelector} from 'react-redux';
import {Door} from 'shared/models/Door';
import {Decoration} from 'shared/models/Decoration';
import CustomizedDoor from '../CustomizedDoor';
import CustomOptionButton from '../CustomOptionButton';
import ColorButton from '../ColorButton';
import classes from './CustomizeDoor.module.css';

// The Render Component will take all the shared props/state from a shared component and use that to render in
// the platform specific way.  There should not be any logic here.  This will be view only.
const CustomizeDoorRenderComponent = ({
  saveDoor,
  contentState,
  doorState,
  handleClickColorButton,
  handleClickDoorButton,
  handleClickDecorationButton,
}: CustomizeDoorRenderComponentProps) => {
  // const {doors, availableColors, group1Decorations, currentDoorCustomizations} = doorState;
  // const {selectedColor, selectedDoorId, selectedGroupOneDecorations} = currentDoorCustomizations;
  // return (
  //   <div className={classes.ContentWrapper}>
  //     <CustomizedDoor />
  //     <div>
  //       {availableColors.map((color) => (
  //         <ColorButton
  //           color={color}
  //           isActive={selectedColor === color}
  //           onClick={handleClickColorButton}
  //         />
  //       ))}
  //     </div>
  //     <div>
  //       <p>Door Designs</p>
  //       {doors.map(({displayName, doorImage, id}: Door) => (
  //         <CustomOptionButton
  //           image={contentState[doorImage]}
  //           alt={displayName}
  //           isActive={selectedDoorId === id}
  //           id={id}
  //           onClick={handleClickDoorButton}
  //         />
  //       ))}
  //     </div>
  //     <div>
  //       <p>Decorations</p>
  //       {group1Decorations.map(({image, displayName, id}: Decoration) => (
  //         <CustomOptionButton
  //           image={contentState[image]}
  //           alt={displayName}
  //           isActive={selectedGroupOneDecorations.findIndex((deco: string) => deco === id) > -1}
  //           id={id}
  //           onClick={handleClickDecorationButton}
  //         />
  //       ))}
  //     </div>
  //     <button onClick={saveDoor} className={classes.SaveButton}>
  //       Save Door
  //     </button>
  //   </div>
  // );
  return <></>;
};

// This would be the component that could be used / shared within the web project
const CustomizeDoor = () => (
  <CustomizeDoorShared
    renderComponent={CustomizeDoorRenderComponent}
    useSelector={useSelector}
    useDispatch={useDispatch}
    useEffect={useEffect}
  />
);

export default CustomizeDoor;
