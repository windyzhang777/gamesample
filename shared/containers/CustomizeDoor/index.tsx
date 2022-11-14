import * as React from 'react';
import {
  updateDoor as updateDoorAction,
  saveDoor as saveDoorAction,
  getDoorsAssets,
} from 'shared/store/door/actions';
import {doorSelector} from 'shared/store/door/selectors';
import {contentSelector} from 'shared/store/content/selectors';
import {DoorCustomizations, DoorState} from 'shared/store/door/reducer';
import {ContentState} from 'shared/store/content/reducer';
import {CustomOption} from 'shared/models/CustomOption';

export interface CustomizeDoorProps {
  renderComponent: React.FC<any>;
  useEffect?: any;
  useDispatch?: any;
  useSelector?: any;
}

export interface CustomizeDoorRenderComponentProps {
  doorState: DoorState;
  contentState: ContentState;
  // Updates the door in redux state
  // Sends the actual door data to playfab
  saveDoor: () => void;
  handleClickColorButton: (color: string) => void;
  handleClickDoorButton: (door: CustomOption) => void;
  handleClickDecorationButton: (decoration: CustomOption) => void;
}

// This is really just a function (and not using React or React Native) that can be used in both web/native components
// This will be the data / state of a component that can be shared between any platform.
const CustomizeDoor = ({
  renderComponent,
  useDispatch,
  useSelector,
  useEffect,
}: CustomizeDoorProps) => {
  // Get door data from redux
  const dispatch = useDispatch();

  const loadAssets = () => {
    // console.log(' --- loading door assets');
    getDoorsAssets({}, dispatch);
  };

  const doorState = useSelector(doorSelector);
  const contentState = useSelector(contentSelector);

  useEffect(() => {
    loadAssets();
  }, []);

  const saveDoor = () => {
    const {currentDoorCustomizations} = doorState;
    const {selectedColor, selectedDoorId, selectedGroupOneDecorations} = currentDoorCustomizations;
    saveDoorAction(
      {
        selectedColor,
        selectedDoorId,
        selectedGroupOneDecorations,
      },
      dispatch,
    );
  };

  // eslint-disable-next-line no-undef
  const updateDoor = (updatedDoorState: Partial<DoorCustomizations>) => {
    // console.log('updateDoor state : ', updatedDoorState);
    updateDoorAction(updatedDoorState, dispatch);
  };

  // Shared event handlers
  const handleClickColorButton = (color: string) => updateDoor({selectedColor: color});
  const handleClickDoorButton = (door: CustomOption) => updateDoor({selectedDoorId: door.id});
  const handleClickDecorationButton = (decoration: CustomOption) =>
    updateDoor({selectedGroupOneDecorations: [decoration.id]});

  // fetch current door

  const renderProps: CustomizeDoorRenderComponentProps = {
    doorState,
    contentState,
    handleClickColorButton,
    handleClickDecorationButton,
    handleClickDoorButton,
    saveDoor,
  };
  return renderComponent(renderProps);
};

export default CustomizeDoor;
