import React from 'react';
import {useSelector} from 'react-redux';
import {
  currentDoorCustomizationsSelector,
  getDoorCatalogItemDataSelector,
} from 'src/store/door/selectors';
import {contentSelector} from 'src/store/content/selectors';
import CustomizedDoor from 'src/components/CustomizedDoor';
import {CustomizedDoorProps} from 'src/components/CustomizedDoor/props';

export default function ConnectedCustomizedDoor() {
  const currentDoorCustomizations = useSelector(currentDoorCustomizationsSelector);
  const contentState = useSelector(contentSelector);

  const doorColor = useSelector(
    getDoorCatalogItemDataSelector('color', currentDoorCustomizations.color, {
      color: '#FFFFFF',
    }),
  ).color;

  // TODO: Fix this when decorations is just an array again.
  const decorations = Array.isArray(currentDoorCustomizations.decorations)
    ? currentDoorCustomizations.decorations
    : [currentDoorCustomizations.decorations];

  const props: CustomizedDoorProps = {
    baseDoor: currentDoorCustomizations.doors,
    contentState,
    currentDoorCustomizations,
    decorations,
    doorColor,
  };

  return <CustomizedDoor {...props} />;
}
