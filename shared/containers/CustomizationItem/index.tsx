import {RenderedComponent} from '../../models/RenderedComponent';

export interface CustomizationItemProps {
  componentStyle?: any;
  selected?: boolean;
  customizationKey: string;
  customizationValue: string;
  icon?: JSX.Element;
  onPress?: (key: string) => void;
}

export default function CustomizationItem({
  componentStyle,
  selected = false,
  customizationKey,
  customizationValue,
  icon,
  onPress,
  renderComponent,
}: CustomizationItemProps & RenderedComponent<CustomizationItemProps>): JSX.Element {
  const renderProps: CustomizationItemProps = {
    componentStyle,
    selected,
    customizationKey,
    customizationValue,
    icon,
    onPress,
  };

  return renderComponent(renderProps);
}
