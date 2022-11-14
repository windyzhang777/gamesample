import {RenderedComponent} from 'shared/models/RenderedComponent';
import {getDoorsConfigurationFlowAndAssets} from '../../../store/door/actions';
import {CustomizationFlowSection} from '../../CustomizationFlow';
import {
  currentDoorCustomizationsSelector,
  doorsCustomizationFlowSelector,
} from '../../../store/door/selectors';
import {DoorCustomizations, doorSlice} from '../../../store/door/reducer';

export interface EditYourDoorProps {
  useDispatch: any;
  useEffect: any;
  useSelector: any;
}

export interface EditYourDoorRenderProps {
  useCurrentDoorCustomizationConfig: any; //[DoorCustomizations, (payload: any) => void];
  doorsCustomizationFlowConfig: CustomizationFlowSection[];
}

export default function EditYourDoor({
  useDispatch,
  useEffect,
  useSelector,
  renderComponent,
}: EditYourDoorProps & RenderedComponent<EditYourDoorProps & EditYourDoorRenderProps>) {
  const dispatch = useDispatch();
  const doorsCustomizationFlowConfig = useSelector(doorsCustomizationFlowSelector);
  const useCurrentDoorCustomizationConfig = [
    useSelector(currentDoorCustomizationsSelector),
    (payload: DoorCustomizations): void => {
      dispatch(doorSlice.actions.setCurrentDoorCustomizations(payload));
    },
  ];
  useEffect(() => {
    getDoorsConfigurationFlowAndAssets({}, dispatch);
  }, []);

  return renderComponent({
    useDispatch,
    useEffect,
    useSelector,
    useCurrentDoorCustomizationConfig,
    doorsCustomizationFlowConfig,
  });
}
