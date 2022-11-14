import React from 'react';
import classes from './CustomizedDoor.module.css';
import {DecorationOverlayProps} from 'shared/models/DecorationOverlayProps';

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

export default DecorationOverlay;
