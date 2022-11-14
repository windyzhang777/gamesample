import {RenderedComponent} from 'shared/models/RenderedComponent';
import {getAvatarsConfigurationFlowAndAssets, getAvatarAssets} from '../../../store/avatar/actions';
import {CustomizationFlowSection} from '../../CustomizationFlow';
import {
  currentAvatarCustomizationsSelector,
  avatarsCustomizationFlowSelector,
} from '../../../store/avatar/selectors';
import {AvatarCustomizations, contentSlice} from '../../../store/avatar/reducer';

export interface EditYourAvatarProps {
  useDispatch: any;
  useEffect: any;
  useSelector: any;
}

export interface EditYourAvatarRenderProps {
  useCurrentAvatarCustomizationConfig: any; //[AvatarCustomizations, (payload: any) => void];
  avatarsCustomizationFlowConfig: CustomizationFlowSection[];
}

export default function EditYourAvatar({
  useDispatch,
  useEffect,
  useSelector,
  renderComponent,
}: EditYourAvatarProps & RenderedComponent<EditYourAvatarProps & EditYourAvatarRenderProps>) {
  const dispatch = useDispatch();
  const avatarsCustomizationFlowConfig = useSelector(avatarsCustomizationFlowSelector);
  const useCurrentAvatarCustomizationConfig = [
    useSelector(currentAvatarCustomizationsSelector),
    (payload: AvatarCustomizations): void => {
      dispatch(contentSlice.actions.setCurrentAvatarCustomizations(payload));
    },
  ];
  useEffect(() => {
    getAvatarsConfigurationFlowAndAssets({}, dispatch);
  }, []);

  const renderProps: EditYourAvatarProps & EditYourAvatarRenderProps = {
    useDispatch,
    useEffect,
    useSelector,
    useCurrentAvatarCustomizationConfig,
    avatarsCustomizationFlowConfig,
  };
  return renderComponent(renderProps);
}
