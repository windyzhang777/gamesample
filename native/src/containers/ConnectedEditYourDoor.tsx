import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';

import {getDoorsConfigurationFlowAndAssets, saveDoor} from 'src/store/door/actions';
import {
  currentDoorCustomizationsSelector,
  doorIsSavedSelector,
  doorIsSavingSelector,
  doorsCustomizationFlowSelector,
} from 'src/store/door/selectors';
import {DoorCustomizations, doorSlice} from 'src/store/door/reducer';
import EditYourDoor from 'src/components/EditYourDoor';
import {contentSelector} from 'src/store/content/selectors';
import {RootStoreState} from 'src/models/RootStoreState';

export default function ConnectedEditYourDoor(): JSX.Element {
  const dispatch = useDispatch();
  const doorsCustomizationFlowConfig = useSelector(doorsCustomizationFlowSelector);
  const isSaving = useSelector(doorIsSavingSelector);
  const isSaved = useSelector(doorIsSavedSelector);
  const useCurrentDoorCustomizationConfig = [
    useSelector(currentDoorCustomizationsSelector),
    (payload: DoorCustomizations): void => {
      dispatch(doorSlice.actions.setCurrentDoorCustomizations(payload));
    },
  ];
  const triggerFlowEndCallback = () => {
    saveDoor({savedDoor: JSON.stringify(useCurrentDoorCustomizationConfig[0])}, dispatch);
  };

  useEffect(() => {
    getDoorsConfigurationFlowAndAssets({}, dispatch);
  }, []);

  const finalFlowOnNextCallback = () => {
    console.log('Next Callback');
  };
  const finalFlowOnShareCallback = () => {
    console.log('Share Callback');
  };
  const finalFlowOnEditCallback = (useCurrentIndex) => {
    const [, setCurrentIndex] = useCurrentIndex;
    dispatch(doorSlice.actions.resetSaved());
    setCurrentIndex(doorsCustomizationFlowConfig.length - 2);
  };

  const content = useSelector<RootStoreState, {[key: string]: string}>(contentSelector);

  return (
    <EditYourDoor
      isSaving={isSaving}
      isSaved={isSaved}
      doorsCustomizationFlowConfig={doorsCustomizationFlowConfig}
      useCurrentDoorCustomizationConfig={useCurrentDoorCustomizationConfig}
      triggerFlowEndCallback={triggerFlowEndCallback}
      finalFlowOnNextCallback={finalFlowOnNextCallback}
      finalFlowOnShareCallback={finalFlowOnShareCallback}
      finalFlowOnEditCallback={finalFlowOnEditCallback}
      content={content}
    />
  );
}
