import {
  currentDoorCustomizationsSelector,
  getDoorCatalogItemDataSelector,
} from 'shared/store/door/selectors';
import {contentSelector} from 'shared/store/content/selectors';
import {DoorCustomizations} from 'shared/store/door/reducer';
import {ContentState} from 'shared/store/content/reducer';
import {RenderedComponent} from '../../models/RenderedComponent';

export interface CustomizedDoorProps {
  useSelector?: any;
}

export interface CustomizedDoorRenderProps {
  doorColor: string;
  currentDoorCustomizations: DoorCustomizations;
  contentState: ContentState;
}

export default function CustomizedDoor({
  useSelector,
  renderComponent,
}: CustomizedDoorProps & RenderedComponent<CustomizedDoorProps & CustomizedDoorRenderProps>) {
  const currentDoorCustomizations = useSelector(currentDoorCustomizationsSelector);
  const contentState = useSelector(contentSelector);
  // console.log('Door Customizations', currentDoorCustomizations);
  const doorColor = useSelector(
    getDoorCatalogItemDataSelector('color', currentDoorCustomizations.color, {
      color: '#000000',
    }),
  ).color;

  const renderProps: CustomizedDoorProps & CustomizedDoorRenderProps = {
    useSelector,
    currentDoorCustomizations,
    contentState,
    doorColor,
  };
  return renderComponent(renderProps);
}
