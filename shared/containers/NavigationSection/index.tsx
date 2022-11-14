import {RenderedComponent} from '../../models/RenderedComponent';
import {NavigationSectionType} from '../../store/navigation-system/types';

export interface NavigationSectionProps {
  navigationSection: NavigationSectionType;
  toggleDrawerCallback: () => void;
}

export default function NavigationSection({
  navigationSection,
  toggleDrawerCallback,
  renderComponent,
}: NavigationSectionProps & RenderedComponent<NavigationSectionProps>) {
  const renderProps: NavigationSectionProps = {
    navigationSection,
    toggleDrawerCallback,
  };
  return renderComponent(renderProps);
}
