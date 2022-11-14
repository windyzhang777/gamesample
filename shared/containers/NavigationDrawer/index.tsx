import {RenderedComponent} from '../../models/RenderedComponent';
import {NavigationSectionType} from '../../store/navigation-system/types';

export interface NavigationDrawerProps {
  sections: NavigationSectionType[];
  closeDrawerCallback: () => void;
  toggleDrawerCallback: () => void;
  drawerOpen?: boolean;
  style?: any;
}

export default function NavigationDrawer({
  sections,
  closeDrawerCallback,
  toggleDrawerCallback,
  drawerOpen,
  renderComponent,
}: NavigationDrawerProps & RenderedComponent<NavigationDrawerProps>) {
  const renderProps: NavigationDrawerProps = {
    sections,
    closeDrawerCallback,
    toggleDrawerCallback,
    drawerOpen,
  };
  return renderComponent(renderProps);
}
