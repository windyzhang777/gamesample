import {RenderedComponent} from '../../models/RenderedComponent';

export interface CustomizationHeaderProps {
  headerText: string;
}

export default function CustomizationHeader({
  headerText,
  renderComponent,
}: CustomizationHeaderProps & RenderedComponent<CustomizationHeaderProps>): JSX.Element {
  const renderProps: CustomizationHeaderProps = {
    headerText,
  };
  return renderComponent(renderProps);
}
