import {RenderedComponent} from '../../models/RenderedComponent';
import {NavigationMenuType} from '../../store/navigation-system/types';
import {Dispatch, SetStateAction} from 'react';

export interface NavigationSystemProps {
  navigationMenu: NavigationMenuType;
  topBarTitle: string;
  useState: any;
  login?: () => void;
  logout?: () => void;
}

export interface NavigationSystemRenderProps {
  drawerOpen: boolean;
  login?: () => void;
  toggleDrawerCallback: () => void;
  closeDrawerCallback: () => void;
}

export default function NavigationSystem({
  login,
  navigationMenu,
  topBarTitle,
  useState,
  renderComponent,
}: NavigationSystemProps & RenderedComponent<NavigationSystemProps & NavigationSystemRenderProps>) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawerCallback = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawerCallback = () => {
    setDrawerOpen(false);
  };

  const renderProps: NavigationSystemProps & NavigationSystemRenderProps = {
    login,
    navigationMenu,
    topBarTitle,
    useState,
    drawerOpen,
    toggleDrawerCallback,
    closeDrawerCallback,
  };
  return renderComponent(renderProps);
}
